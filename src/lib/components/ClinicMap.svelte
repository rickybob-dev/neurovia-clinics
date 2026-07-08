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

  function markerIcon(index, selected) {
    return leaflet.divIcon({
      className: 'neurovia-marker-shell',
      html: `<span class="neurovia-marker ${selected ? 'is-selected' : ''}"><b>${index + 1}</b></span>`,
      iconSize: [42, 48],
      iconAnchor: [21, 46]
    });
  }

  function renderMarkers() {
    if (!map || !leaflet) return;
    if (layer) layer.remove();
    layer = leaflet.layerGroup();
    centers.forEach((center, index) => {
      const marker = leaflet.marker([center.lat, center.lng], {
        icon: markerIcon(index, center.id === selectedId),
        keyboard: true,
        title: center.name,
        alt: `${center.name}, ${center.city}`
      });
      marker.bindTooltip(`<strong>${center.name}</strong><br>${center.city}`, { direction: 'top', offset: [0, -38] });
      marker.on('click', () => dispatch('select', center));
      marker.addTo(layer);
    });
    layer.addTo(map);
  }

  function locate() {
    map?.locate({ setView: true, maxZoom: 9 });
  }

  onMount(async () => {
    leaflet = await import('leaflet');
    await import('leaflet/dist/leaflet.css');
    map = leaflet.map(mapElement, { zoomControl: false, minZoom: 5, maxZoom: 17, scrollWheelZoom: true }).setView([42.5, 12.5], 6);
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    leaflet.control.zoom({ position: 'bottomright' }).addTo(map);
    renderMarkers();
  });

  onDestroy(() => map?.remove());

  $: if (map && centers && selectedId) {
    renderMarkers();
    const selected = centers.find((center) => center.id === selectedId);
    if (selected) map.flyTo([selected.lat, selected.lng], Math.max(map.getZoom(), 8), { duration: 0.45 });
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
  :global(.neurovia-marker) { display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border: 3px solid white; border-radius: 50% 50% 50% 10%; background: var(--teal); color: white; font-size: .875rem; font-weight: 800; box-shadow: 0 3px 7px oklch(0.2 0.02 200 / .32); transform: rotate(-45deg); }
  :global(.neurovia-marker b) { transform: rotate(45deg); }
  :global(.neurovia-marker.is-selected) { background: var(--oxblood); transform: rotate(-45deg) scale(1.12); }
  :global(.neurovia-marker-shell span) { line-height: 1; }
  :global(.leaflet-tooltip) { border: 0; border-radius: .5rem; box-shadow: 0 2px 8px oklch(0.2 0.02 200 / .18); font-family: var(--font); }
  :global(.leaflet-control-zoom a) { color: var(--teal); }
  @media (max-width: 760px) { .map-wrap, .map-canvas { min-height: calc(100dvh - 16rem); } .locate span:last-child { display: none; } }
  @media (prefers-reduced-motion: reduce) { :global(.leaflet-zoom-animated) { transition: none !important; } }
</style>
