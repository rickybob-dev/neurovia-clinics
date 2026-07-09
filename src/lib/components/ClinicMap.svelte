<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';

  export let centers = [];
  export let selectedId = '';
  export let language = 'it';

  const dispatch = createEventDispatcher();
  let mapElement;
  let map;
  let leaflet;
  let layer;
  let bounds;
  let centersKey = '';
  let hasInitialFit = false;
  let lastSelectedId = '';

  function markerIcon(selected) {
    return leaflet.divIcon({
      className: 'neurovia-marker-shell',
      html: `<span class="neurovia-marker ${selected ? 'is-selected' : ''}" aria-hidden="true"></span>`,
      iconSize: [28, 42],
      iconAnchor: [14, 40]
    });
  }

  function clusterIcon(count, selected) {
    return leaflet.divIcon({
      className: 'neurovia-marker-shell',
      html: `<span class="neurovia-cluster ${selected ? 'is-selected' : ''}"><b>${count}</b></span>`,
      iconSize: [46, 46],
      iconAnchor: [23, 23]
    });
  }

  function clusterThresholdForZoom(zoom) {
    if (zoom <= 5) return 95;
    if (zoom <= 7) return 70;
    if (zoom <= 9) return 48;
    return 28;
  }

  function buildGroups() {
    const zoom = map.getZoom();
    const threshold = clusterThresholdForZoom(zoom);
    const projected = centers.map((center) => ({
      center,
      point: map.project([center.lat, center.lng], zoom)
    }));
    const selected = centers.find((center) => center.id === selectedId);
    const selectedIdSet = selected ? new Set([selected.id]) : new Set();
    const clusterable = projected.filter(({ center }) => !selectedIdSet.has(center.id));
    const used = new Set();
    const groups = [];

    for (let i = 0; i < clusterable.length; i += 1) {
      if (used.has(i)) continue;
      const seed = clusterable[i];
      const group = [seed];
      used.add(i);
      for (let j = i + 1; j < clusterable.length; j += 1) {
        if (used.has(j)) continue;
        const candidate = clusterable[j];
        if (seed.point.distanceTo(candidate.point) <= threshold) {
          group.push(candidate);
          used.add(j);
        }
      }
      groups.push(group);
    }

    if (selected) {
      groups.push([{ center: selected, point: map.project([selected.lat, selected.lng], zoom) }]);
    }

    return groups;
  }

  function renderMarkers() {
    if (!map || !leaflet) return;
    if (layer) layer.remove();
    layer = leaflet.layerGroup();
    const points = [];
    const groups = buildGroups();
    groups.forEach((group) => {
      const members = group.map((item) => item.center);
      const latLngs = members.map((center) => [center.lat, center.lng]);
      points.push(...latLngs);
      if (group.length === 1) {
        const center = members[0];
        const marker = leaflet.marker([center.lat, center.lng], {
          icon: markerIcon(center.id === selectedId),
          keyboard: true,
          title: center.name,
          alt: `${center.name}, ${center.city}`
        });
        marker.bindTooltip(`<strong>${center.name}</strong><br>${center.city}`, { direction: 'top', offset: [0, -38] });
        marker.on('click', () => dispatch('select', center));
        marker.addTo(layer);
        return;
      }

      const clusterLatLng = group.reduce(
        (acc, item) => [acc[0] + item.center.lat, acc[1] + item.center.lng],
        [0, 0]
      ).map((value) => value / group.length);
      const containsSelected = members.some((center) => center.id === selectedId);
      const cluster = leaflet.marker(clusterLatLng, {
        icon: clusterIcon(group.length, containsSelected),
        keyboard: true,
        title: `${group.length} ${language === 'it' ? 'centri' : 'centers'}`,
        alt: `${group.length} ${language === 'it' ? 'centri raggruppati' : 'clustered centers'}`
      });
      cluster.bindTooltip(
        `<strong>${group.length} ${language === 'it' ? 'centri' : 'centers'}</strong><br>${members.slice(0, 3).map((center) => center.name).join('<br>')}`,
        { direction: 'top', offset: [0, -34] }
      );
      cluster.on('click', () => {
        const groupBounds = leaflet.latLngBounds(latLngs);
        map.fitBounds(groupBounds.pad(0.28), {
          animate: true,
          maxZoom: 12,
          paddingTopLeft: [24, 24],
          paddingBottomRight: [24, 24]
        });
      });
      cluster.addTo(layer);
    });
    layer.addTo(map);
    bounds = points.length ? leaflet.latLngBounds(points) : null;
  }

  function fitToCenters() {
    if (!map || !bounds || selectedId || hasInitialFit) return;
    map.fitBounds(bounds.pad(0.35), {
      animate: false,
      maxZoom: 5,
      paddingTopLeft: [28, 28],
      paddingBottomRight: [28, 28]
    });
    hasInitialFit = true;
  }

  function locate() {
    map?.locate({ setView: true, maxZoom: 9 });
  }

  onMount(async () => {
    leaflet = await import('leaflet');
    await import('leaflet/dist/leaflet.css');
    map = leaflet.map(mapElement, { zoomControl: false, minZoom: 3, maxZoom: 17, scrollWheelZoom: true }).setView([47.2, 11], 4);
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    leaflet.control.zoom({ position: 'bottomright' }).addTo(map);
    map.on('zoomend moveend', renderMarkers);
    renderMarkers();
    fitToCenters();
  });

  onDestroy(() => {
    map?.off('zoomend moveend', renderMarkers);
    map?.remove();
  });

  $: if (map && centers) {
    const nextKey = centers.map((center) => center.id).join('|');
    if (nextKey !== centersKey) {
      centersKey = nextKey;
      hasInitialFit = false;
      renderMarkers();
      fitToCenters();
    }
  }

  $: if (map && selectedId !== lastSelectedId) {
    lastSelectedId = selectedId;
    renderMarkers();
    if (selectedId) {
      const selected = centers.find((center) => center.id === selectedId);
      if (selected) map.flyTo([selected.lat, selected.lng], Math.max(map.getZoom(), 6), { duration: 0.5 });
    }
  }
</script>

<div class="map-wrap">
  <div class="map-canvas" bind:this={mapElement} aria-label={language === 'it' ? 'Mappa interattiva dei centri' : 'Interactive map of centers'}></div>
  <button class="locate" type="button" on:click={locate} aria-label={language === 'it' ? 'Mostra la mia posizione' : 'Show my location'}>
    <span aria-hidden="true">◎</span>
    <span>{language === 'it' ? 'La mia posizione' : 'My location'}</span>
  </button>
</div>

<style>
  .map-wrap, .map-canvas { position: relative; width: 100%; height: 100%; min-height: 34rem; }
  .map-canvas { z-index: 1; background: var(--aqua); }
  .locate { position: absolute; z-index: 2; right: 1rem; top: 1rem; display: inline-flex; align-items: center; gap: .5rem; min-height: 2.75rem; padding: 0 .875rem; border: 0; border-radius: .5rem; background: white; color: var(--teal); box-shadow: 0 2px 8px oklch(0.2 0.02 200 / .18); font: inherit; font-weight: 700; cursor: pointer; }
  .locate:hover { background: var(--aqua); }
  .locate:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; }
  :global(.neurovia-marker-shell) { background: transparent; border: 0; }
  :global(.neurovia-marker) { position: relative; display: block; width: 1.2rem; height: 1.2rem; border: 3px solid white; border-radius: 50% 50% 50% 0; background: var(--teal); box-shadow: 0 4px 10px oklch(0.2 0.02 200 / .28); transform: rotate(-45deg); }
  :global(.neurovia-marker::after) { content: ''; position: absolute; inset: 27%; border-radius: 50%; background: white; opacity: .96; }
  :global(.neurovia-marker.is-selected) { background: var(--oxblood); transform: rotate(-45deg) scale(1.12); }
  :global(.neurovia-cluster) { display: grid; place-items: center; width: 2.9rem; height: 2.9rem; border: 3px solid white; border-radius: 50%; background: var(--navy); color: white; font-size: .9rem; font-weight: 800; box-shadow: 0 3px 7px oklch(0.2 0.02 200 / .28); }
  :global(.neurovia-cluster.is-selected) { background: var(--oxblood); transform: scale(1.06); }
  :global(.neurovia-cluster b) { transform: none; }
  :global(.neurovia-marker-shell span) { line-height: 1; }
  :global(.leaflet-tooltip) { border: 0; border-radius: .5rem; box-shadow: 0 2px 8px oklch(0.2 0.02 200 / .18); font-family: var(--font); }
  :global(.leaflet-control-zoom a) { color: var(--teal); }
  @media (max-width: 760px) { .map-wrap, .map-canvas { min-height: calc(100dvh - 16rem); } .locate span:last-child { display: none; } }
  @media (prefers-reduced-motion: reduce) { :global(.leaflet-zoom-animated) { transition: none !important; } }
</style>
