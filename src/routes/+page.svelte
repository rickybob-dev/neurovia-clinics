<script>
  import { onMount } from 'svelte';
  import { MapPin, Search, SlidersHorizontal, ShieldCheck, ExternalLink, Phone, Bookmark, X, CheckCircle2, Users, ClipboardList, Plus, Languages, ChevronDown, Star, Info, Building2, Menu, Scale, ShieldAlert, ArrowLeftRight, Stethoscope, Hospital, Bot, HeartPulse, Globe, MapPinned, BookOpenText, ListFilter, Droplets } from '@lucide/svelte';
  import ClinicMap from '$lib/components/ClinicMap.svelte';
  import { centers, conditionLabels, technologyLabels } from '$lib/data/centers.js';
  import { copy } from '$lib/i18n.js';

  let language = 'en';
  let selected = null;
  let query = '';
  let condition = '';
  let technology = '';
  let scope = 'all';
  let country = 'all';
  let minRating = 0;
  let researchOnly = false;
  let roboticsOnly = false;
  let hydrotherapyOnly = false;
  let speechTherapyOnly = false;
  let cognitiveRehabOnly = false;
  let spasticityCareOnly = false;
  let ssnOnly = false;
  let inpatientOnly = false;
  let reviewDialog;
  let centerDialog;
  let compareDialog;
  let toast = '';
  let saved = new Set();
  let menuOpen = false;
  let moderationQueue = [];
  let compareTargetId = '';
  let compareIds = [];
  let currentPage = 1;
  let lastFilterSignature = '';
  const pageSize = 12;

  $: t = copy[language];
  $: normalized = query.trim().toLocaleLowerCase(language);
  $: countryOptions = [...new Set(centers.map((center) => centerCountry(center)))].sort((a, b) => a.localeCompare(b, language));
  $: filtered = centers.filter((center) => {
    const searchable = [center.name, center.city, center.region, ...center.conditions.map((item) => conditionLabels[item]?.[language] ?? item)].join(' ').toLocaleLowerCase(language);
    const centerCountryValue = centerCountry(center);
    const isItaly = centerCountryValue === 'Italy';
    const isEurope = centerCountryValue !== 'Italy';
    const hasResearch = center.researchHighlights?.length;
    const isRobotics = center.technologies.includes('robotics') || center.technologies.includes('exoskeleton') || center.robotNotes?.length;
    const hasWaterTherapy = center.features?.includes('hydrotherapy') || center.features?.includes('pool') || center.waterTherapy;
    const hasSpeechTherapy = center.disciplines.some((item) => /logopedia|speech and language therapy|speech therapy/i.test(item));
    const hasCognitiveRehab = center.conditions.includes('cognitive') || center.disciplines.some((item) => /neuropsychology|psychology|cognitive/i.test(item));
    const hasSpasticityCare = center.features?.includes('spasticity') || center.features?.includes('spasticity-care') || center.description?.en?.toLowerCase().includes('spastic') || center.description?.it?.toLowerCase().includes('spastic');
    const rating = reviewSummary(center.id)?.score || 0;
    return (!normalized || searchable.includes(normalized)) &&
      (country === 'all' || centerCountryValue === country) &&
      (!condition || center.conditions.includes(condition)) &&
      (!technology || center.technologies.includes(technology)) &&
      (!minRating || rating >= minRating) &&
      (!researchOnly || hasResearch) &&
      (!roboticsOnly || isRobotics) &&
      (!hydrotherapyOnly || hasWaterTherapy) &&
      (!speechTherapyOnly || hasSpeechTherapy) &&
      (!cognitiveRehabOnly || hasCognitiveRehab) &&
      (!spasticityCareOnly || hasSpasticityCare) &&
      (!ssnOnly || center.access.includes('SSN')) &&
      (!inpatientOnly || center.modes.includes('inpatient')) &&
      (scope === 'all' ||
        (scope === 'italy' && isItaly) ||
        (scope === 'europe' && isEurope) ||
        (scope === 'robotics' && isRobotics) ||
        (scope === 'research' && isResearch) ||
        (scope === 'ssn' && center.access.some((item) => item === 'SSN' || item === 'public')) ||
        (scope === 'inpatient' && center.modes.includes('inpatient')));
  });
  $: compareOptions = filtered.filter((center) => center.id !== selected?.id);
  $: if (!compareTargetId || !compareOptions.some((center) => center.id === compareTargetId)) {
    compareTargetId = compareOptions[0]?.id || '';
  }
  $: compareTarget = centers.find((center) => center.id === compareTargetId) || compareOptions[0] || selected;
  $: compareSelection = compareIds.map((id) => centers.find((center) => center.id === id)).filter(Boolean);
  $: pendingReviews = moderationQueue.filter((item) => item.kind === 'review');
  $: pendingCenters = moderationQueue.filter((item) => item.kind === 'center');
  $: approvedReviewCount = moderationQueue.filter((item) => item.kind === 'review' && item.status === 'approved').length;
  $: filterSignature = [normalized, condition, technology, scope, country, minRating, researchOnly, roboticsOnly, hydrotherapyOnly, speechTherapyOnly, cognitiveRehabOnly, spasticityCareOnly, ssnOnly, inpatientOnly].join('|');
  $: if (filterSignature !== lastFilterSignature) {
    lastFilterSignature = filterSignature;
    currentPage = 1;
  }
  $: if (selected && !filtered.some((center) => center.id === selected.id)) selected = null;
  $: totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  $: if (currentPage > totalPages) currentPage = totalPages;
  $: paginatedCenters = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  $: currentStart = filtered.length ? (currentPage - 1) * pageSize + 1 : 0;
  $: currentEnd = filtered.length ? Math.min(filtered.length, currentPage * pageSize) : 0;
  $: pageWindow = (() => {
    const width = 2;
    const start = Math.max(1, currentPage - width);
    const end = Math.min(totalPages, currentPage + width);
    const pages = [];
    for (let i = start; i <= end; i += 1) pages.push(i);
    return pages;
  })();

  onMount(() => {
    const storedLanguage = localStorage.getItem('neurovia-language');
    if (storedLanguage === 'it' || storedLanguage === 'en') language = storedLanguage;
    document.documentElement.lang = language;
    moderationQueue = JSON.parse(localStorage.getItem('neurovia-moderation-queue') || '[]');
  });

  function setLanguage(value) {
    language = value;
    localStorage.setItem('neurovia-language', value);
    document.documentElement.lang = value;
  }

  function pick(center) {
    selected = center;
  }

  function resetFilters() {
    query = ''; condition = ''; technology = ''; scope = 'all'; country = 'all'; minRating = 0; researchOnly = false; roboticsOnly = false; hydrotherapyOnly = false; speechTherapyOnly = false; cognitiveRehabOnly = false; spasticityCareOnly = false; ssnOnly = false; inpatientOnly = false; currentPage = 1;
  }

  function toggleSaved() {
    if (!selected) return;
    const next = new Set(saved);
    next.has(selected.id) ? next.delete(selected.id) : next.add(selected.id);
    saved = next;
  }

  function toggleCompare(center) {
    if (!center) return;
    const next = compareIds.includes(center.id) ? compareIds.filter((id) => id !== center.id) : [...compareIds, center.id].slice(-3);
    compareIds = next;
  }

  function goToPage(page) {
    currentPage = Math.min(Math.max(1, page), totalPages);
  }

  function persistQueue(queue) {
    moderationQueue = queue;
    localStorage.setItem('neurovia-moderation-queue', JSON.stringify(queue));
  }

  function submitForModeration(event, dialog, kind) {
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const queue = JSON.parse(localStorage.getItem('neurovia-moderation-queue') || '[]');
    queue.push({ id: crypto.randomUUID(), kind, ...data, centerId: selected?.id, submittedAt: new Date().toISOString(), status: 'pending' });
    persistQueue(queue);
    dialog.close();
    event.currentTarget.reset();
    toast = t.submitted;
    setTimeout(() => (toast = ''), 5000);
  }

  function reviewQueueItem(itemId, nextStatus) {
    persistQueue(
      moderationQueue.map((item) => (item.id === itemId ? { ...item, status: nextStatus, reviewedAt: new Date().toISOString() } : item))
    );
  }

  function removeQueueItem(itemId) {
    persistQueue(moderationQueue.filter((item) => item.id !== itemId));
  }

  function openCompare() {
    if (!selected || !compareOptions.length) return;
    compareTargetId = compareOptions[0]?.id || '';
    compareDialog.showModal();
  }

  function formatSubmittedAt(value) {
    return new Intl.DateTimeFormat(language === 'it' ? 'it-IT' : 'en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(value));
  }

  function metricFor(center) {
    if (!center) {
      return {
        disciplines: 0,
        conditions: 0,
        technologies: 0,
        access: 0,
        modes: 0,
        completeness: 0
      };
    }
    return {
      disciplines: center.disciplines.length,
      conditions: center.conditions.length,
      technologies: center.technologies.length,
      access: center.access.length,
      modes: center.modes.length,
      completeness: center.completeness
    };
  }

  function centerName(id) {
    return centers.find((center) => center.id === id)?.name || t.unknownCenter;
  }

  function centerCountry(center) {
    return center.country || 'Italy';
  }

  function reviewSummary(centerId) {
    const approved = moderationQueue.filter((item) => item.kind === 'review' && item.status === 'approved' && item.centerId === centerId);
    if (!approved.length) return null;
    const scores = approved.map((item) => {
      const values = reviewCategories.map(([key]) => Number(item[key])).filter((value) => Number.isFinite(value));
      return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
    });
    const score = scores.reduce((sum, value) => sum + value, 0) / scores.length;
    return { score: Math.round(score * 10) / 10, count: approved.length };
  }

  function queueLabel(item) {
    if (language === 'it') {
      if (item.kind === 'review') return 'Recensione';
      if (item.status === 'approved') return 'Approvato';
      if (item.status === 'rejected') return 'Rifiutato';
      return 'Centro';
    }
    if (item.kind === 'review') return 'Review';
    if (item.status === 'approved') return 'Approved';
    if (item.status === 'rejected') return 'Rejected';
    return 'Center';
  }

  function profileIndicators(center) {
    if (!center) return [];
    const hasRobotics = center.technologies.includes('robotics') || center.technologies.includes('exoskeleton');
    return [
      {
        icon: Stethoscope,
        label: language === 'it' ? 'Medici' : 'Doctors',
        score: Math.min(10, 6 + Math.floor(center.disciplines.filter((item) => item.includes('Neu') || item.includes('Fisi')).length / 2))
      },
      {
        icon: HeartPulse,
        label: language === 'it' ? 'Terapie' : 'Rehab',
        score: Math.min(10, 6 + Math.floor(center.conditions.length / 2))
      },
      {
        icon: Hospital,
        label: language === 'it' ? 'Struttura' : 'Hospital',
        score: center.modes.includes('inpatient') ? 9 : 7
      },
      {
        icon: Bot,
        label: language === 'it' ? 'Robotica' : 'Robotics',
        score: hasRobotics ? 9 : 4
      }
    ];
  }

  function scoreTone(score) {
    if (score >= 9) return 'high';
    if (score >= 7) return 'mid';
    return 'low';
  }

  function centerSignals(center) {
    if (!center) return [];
    const review = reviewSummary(center.id);
    const signals = [];
    if (review) {
      signals.push({
        label: language === 'it' ? 'Review clienti' : 'Client review',
        value: `${review.score}/10`,
        detail: `${review.count} ${review.count === 1 ? (language === 'it' ? 'recensione' : 'review') : (language === 'it' ? 'recensioni' : 'reviews')}`
      });
    }
    if (center.researchHighlights?.length) {
      signals.push({
        label: language === 'it' ? 'Ricerca' : 'Research',
        value: center.researchHighlights[0],
        detail: center.researchHighlights[1] || ''
      });
    }
    if (center.robotNotes?.length) {
      signals.push({
        label: language === 'it' ? 'Robotica' : 'Robotics',
        value: center.robotNotes[0],
        detail: center.robotNotes[1] || ''
      });
    }
    return signals.slice(0, 3);
  }

  const reviewCategories = [
    ['medical-team', { it: 'Équipe medica', en: 'Medical team' }],
    ['specialization', { it: 'Competenze specialistiche', en: 'Specialist expertise' }],
    ['technology', { it: 'Tecnologie e robotica', en: 'Technology & robotics' }],
    ['nursing', { it: 'Assistenza infermieristica', en: 'Nursing care' }],
    ['communication', { it: 'Comunicazione', en: 'Communication' }],
    ['discharge', { it: 'Supporto alla dimissione', en: 'Discharge support' }]
  ];
</script>

<svelte:head>
  <title>Neurovia — {t.title}</title>
</svelte:head>

<header class="site-header">
  <a class="brand" href="#top" aria-label="Neurovia home">
    <span class="brand-mark" aria-hidden="true"><MapPin size={24} strokeWidth={2.5} /></span>
    <span>Neurovia</span>
  </a>
  <button class="mobile-menu" type="button" on:click={() => (menuOpen = !menuOpen)} aria-expanded={menuOpen} aria-label="Menu"><Menu /></button>
  <nav class:open={menuOpen} aria-label="Main navigation">
    <a class="active" href="#explore">{t.navExplore}</a>
    <a href="#method">{t.navMethod}</a>
    <button class="button secondary compact" type="button" on:click={() => centerDialog.showModal()}><Plus size={18} /> {t.addCenter}</button>
  </nav>
  <div class="header-actions">
    <label class="language-control">
      <Languages size={17} aria-hidden="true" />
      <span class="sr-only">{t.language}</span>
      <select value={language} on:change={(event) => setLanguage(event.currentTarget.value)}>
        <option value="it">IT</option><option value="en">EN</option>
      </select>
    </label>
    <button class="account" type="button">{t.account} <ChevronDown size={16} /></button>
  </div>
</header>

<main id="top">
  <section class="intro" id="explore">
    <div>
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <div class="hero-strip" aria-label={language === 'it' ? 'Panoramica rapida' : 'Quick overview'}>
        <span>{centers.length} {language === 'it' ? 'centri' : 'centers'}</span>
        <span>{language === 'it' ? 'Mappa interattiva' : 'Interactive map'}</span>
        <span>{language === 'it' ? 'Recensioni moderate' : 'Moderated reviews'}</span>
      </div>
    </div>
  </section>

  <section class="search-panel" aria-label={t.navExplore}>
    <label class="search-field">
      <Search size={21} aria-hidden="true" />
      <span class="sr-only">{t.search}</span>
      <input bind:value={query} placeholder={t.search} />
      {#if query}<button type="button" on:click={() => (query = '')} aria-label={t.clear}><X size={18} /></button>{/if}
    </label>
    <div class="filter-row">
      <span class="filter-label"><SlidersHorizontal size={18} /> {t.filters}</span>
      <label><span class="sr-only">{t.conditions}</span><select bind:value={condition}><option value="">{t.allConditions}</option>{#each Object.entries(conditionLabels) as [key, label]}<option value={key}>{label[language]}</option>{/each}</select></label>
      <label><span class="sr-only">{t.technologies}</span><select bind:value={technology}><option value="">{t.allTech}</option>{#each Object.entries(technologyLabels) as [key, label]}<option value={key}>{label[language]}</option>{/each}</select></label>
      <label class="check-chip"><input type="checkbox" bind:checked={ssnOnly} /> <span>{t.ssnOnly}</span></label>
      <label class="check-chip"><input type="checkbox" bind:checked={inpatientOnly} /> <span>{t.inpatient}</span></label>
      {#if query || condition || technology || ssnOnly || inpatientOnly}<button class="text-button" type="button" on:click={resetFilters}>{t.clear}</button>{/if}
    </div>
    <div class="filter-row quality-row" aria-label={language === 'it' ? 'Filtri qualità' : 'Quality filters'}>
      <span class="filter-label"><Star size={18} /> {language === 'it' ? 'Più filtri' : 'More filters'}</span>
      <label>
        <span class="sr-only">{language === 'it' ? 'Valutazione minima' : 'Minimum rating'}</span>
        <select bind:value={minRating}>
          <option value={0}>{language === 'it' ? 'Valutazione' : 'Rating'}: {language === 'it' ? 'tutte' : 'any'}</option>
          <option value={8}>{language === 'it' ? '8 o più' : '8+'}</option>
          <option value={7}>{language === 'it' ? '7 o più' : '7+'}</option>
          <option value={6}>{language === 'it' ? '6 o più' : '6+'}</option>
        </select>
      </label>
      <label class="check-chip"><input type="checkbox" bind:checked={researchOnly} /> <span>{language === 'it' ? 'Ricerca' : 'Research'}</span></label>
      <label class="check-chip"><input type="checkbox" bind:checked={roboticsOnly} /> <span>{language === 'it' ? 'Robotica' : 'Robotics'}</span></label>
      <label class="check-chip"><input type="checkbox" bind:checked={hydrotherapyOnly} /> <span><Droplets size={15} /> {language === 'it' ? 'Idroterapia' : 'Hydrotherapy'}</span></label>
      <label class="check-chip"><input type="checkbox" bind:checked={speechTherapyOnly} /> <span>{language === 'it' ? 'Logopedia' : 'Speech therapy'}</span></label>
      <label class="check-chip"><input type="checkbox" bind:checked={cognitiveRehabOnly} /> <span>{language === 'it' ? 'Cognitiva' : 'Cognitive rehab'}</span></label>
      <label class="check-chip"><input type="checkbox" bind:checked={spasticityCareOnly} /> <span>{language === 'it' ? 'Spasticità' : 'Spasticity care'}</span></label>
      {#if minRating || researchOnly || roboticsOnly || hydrotherapyOnly || speechTherapyOnly || cognitiveRehabOnly || spasticityCareOnly}<button class="text-button" type="button" on:click={resetFilters}>{t.clear}</button>{/if}
    </div>
  </section>

  <section class="map-section">
    <div class="spotlight">
      {#if selected}
        <div class="spotlight-main">
          <div class="spotlight-heading">
            <div>
              <p class="spotlight-kicker">{language === 'it' ? 'Centro selezionato' : 'Selected center'}</p>
              <h2>{selected.name}</h2>
              <p>{selected.city} · {selected.region}</p>
            </div>
            <a class="button secondary" href={`/center/${selected.id}`}>{language === 'it' ? 'Apri pagina completa' : 'Open full page'}</a>
          </div>
          <p class="description">{selected.description[language]}</p>
          <div class="indicator-row" aria-label={language === 'it' ? 'Indicatori di qualità del profilo' : 'Profile quality indicators'}>
            {#each profileIndicators(selected) as item}
              <div class={`indicator-card tone-${scoreTone(item.score)}`}>
                <svelte:component this={item.icon} size={18} />
                <span>{item.label}</span>
                <strong>{item.score}/10</strong>
              </div>
            {/each}
          </div>
          <div class="spotlight-meta">
            <span>{selected.modes.includes('inpatient') ? t.inpatient : language === 'it' ? 'Ambulatoriale' : 'Outpatient'}</span>
            <span>{selected.completeness}% {t.completeness}</span>
            <span>{selected.access.join(' · ')}</span>
          </div>
          <div class="community-strip">
            {#if reviewSummary(selected.id)}
              <span>{language === 'it' ? 'Review clienti' : 'Client review'}</span>
              <strong>{reviewSummary(selected.id).score}/10</strong>
              <span>{reviewSummary(selected.id).count} {reviewSummary(selected.id).count === 1 ? (language === 'it' ? 'recensione approvata' : 'approved review') : (language === 'it' ? 'recensioni approvate' : 'approved reviews')}</span>
            {:else}
              <span>{language === 'it' ? 'Review clienti' : 'Client review'}</span>
              <strong>—/10</strong>
              <span>{language === 'it' ? 'In attesa di recensioni approvate' : 'Waiting for approved reviews'}</span>
            {/if}
          </div>
          {#if selected.researchHighlights?.length || selected.robotNotes?.length}
            <div class="signal-stack" aria-label={language === 'it' ? 'Ricerca e robotica' : 'Research and robotics'}>
              {#each centerSignals(selected) as signal}
                <article class="signal-card">
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                  {#if signal.detail}<small>{signal.detail}</small>{/if}
                </article>
              {/each}
            </div>
          {/if}
        </div>
        <div class="spotlight-actions">
          <a class="button secondary" href={selected.url} target="_blank" rel="noreferrer">{t.source}<ExternalLink size={16} /></a>
          <div>
            <button class="button secondary" type="button" on:click={toggleSaved}><Bookmark size={17} fill={saved.has(selected.id) ? 'currentColor' : 'none'} /> {t.save}</button>
            <button class="button secondary" type="button" on:click={() => toggleCompare(selected)}>
              <ArrowLeftRight size={17} />
              {compareIds.includes(selected.id) ? (language === 'it' ? 'Rimuovi' : 'Remove') : t.compare}
            </button>
            <button class="button secondary" type="button" disabled={!compareOptions.length} on:click={openCompare}><ArrowLeftRight size={17} /> {language === 'it' ? 'Apri confronto' : 'Open compare'}</button>
            <button class="button primary" type="button" on:click={() => reviewDialog.showModal()}>{t.review}</button>
          </div>
        </div>
      {:else}
        <div class="spotlight-empty">
          <p class="spotlight-kicker">{language === 'it' ? 'Seleziona un centro' : 'Select a center'}</p>
          <h2>{language === 'it' ? 'Clicca un segnaposto per aprire i dettagli.' : 'Click a map pin to open the details.'}</h2>
          <p>{language === 'it' ? 'La mappa è la vista principale. I centri sono sotto, in una sezione separata.' : 'The map is the main view. The centers live below in a separate section.'}</p>
        </div>
      {/if}
    </div>
    <div class="map-pane"><ClinicMap centers={filtered} selectedId={selected?.id || ''} {language} on:select={(event) => pick(event.detail)} /></div>
  </section>

  <section class="center-list-section" id="centers">
    <div class="section-banner">
      <div>
        <p class="spotlight-kicker">{language === 'it' ? 'Centri in elenco' : 'Centers list'}</p>
        <h2>{filtered.length} {t.results}</h2>
        <p class="banner-meta">
          {#if filtered.length}
            {language === 'it' ? 'Pagina' : 'Page'} {currentPage}/{totalPages} · {currentStart}–{currentEnd} / {filtered.length}
          {:else}
            0 / 0
          {/if}
          <span>·</span>
          <span>{approvedReviewCount} {language === 'it' ? 'recensioni approvate' : 'approved reviews'}</span>
        </p>
      </div>
      <p>{language === 'it' ? 'Ogni scheda può aprire la mappa o la pagina dettagliata del centro.' : 'Each card can open the map or the full center page.'}</p>
    </div>
    <div class="country-bar" aria-label={language === 'it' ? 'Filtri per paese' : 'Country filters'}>
      <button class:active={country === 'all'} type="button" on:click={() => (country = 'all')}>
        <Globe size={16} />
        <span>{language === 'it' ? 'Tutti i paesi' : 'All countries'}</span>
      </button>
      {#each countryOptions as itemCountry}
        <button class:active={country === itemCountry} type="button" on:click={() => (country = itemCountry)}>
          <MapPinned size={16} />
          <span>{itemCountry}</span>
        </button>
      {/each}
    </div>
    <div class="scope-bar" aria-label={language === 'it' ? 'Filtri rapidi' : 'Quick filters'}>
      <button class:active={scope === 'all'} type="button" on:click={() => (scope = 'all')}>
        <ListFilter size={16} />
        <span>{language === 'it' ? 'Tutti' : 'All'}</span>
      </button>
      <button class:active={scope === 'italy'} type="button" on:click={() => (scope = 'italy')}>
        <MapPinned size={16} />
        <span>{language === 'it' ? 'Italia' : 'Italy'}</span>
      </button>
      <button class:active={scope === 'europe'} type="button" on:click={() => (scope = 'europe')}>
        <Globe size={16} />
        <span>{language === 'it' ? 'Europa' : 'Europe'}</span>
      </button>
      <button class:active={scope === 'robotics'} type="button" on:click={() => (scope = 'robotics')}>
        <Bot size={16} />
        <span>{language === 'it' ? 'Robotica' : 'Robotics'}</span>
      </button>
      <button class:active={scope === 'research'} type="button" on:click={() => (scope = 'research')}>
        <BookOpenText size={16} />
        <span>{language === 'it' ? 'Ricerca' : 'Research'}</span>
      </button>
      <button class:active={scope === 'ssn'} type="button" on:click={() => (scope = 'ssn')}>
        <ShieldCheck size={16} />
        <span>{language === 'it' ? 'Pubblico' : 'Public'}</span>
      </button>
      <button class:active={scope === 'inpatient'} type="button" on:click={() => (scope = 'inpatient')}>
        <Hospital size={16} />
        <span>{language === 'it' ? 'Ricovero' : 'Inpatient'}</span>
      </button>
      <button type="button" on:click={resetFilters}>
        <X size={16} />
        <span>{language === 'it' ? 'Reset' : 'Reset'}</span>
      </button>
    </div>
    <div class="compare-shelf">
      <div class="compare-shelf-head">
        <div>
          <p class="spotlight-kicker">{language === 'it' ? 'Confronto rapido' : 'Quick compare'}</p>
          <h3>{language === 'it' ? 'Fino a 3 centri selezionati' : 'Up to 3 selected centers'}</h3>
        </div>
        <span>{compareSelection.length}/3</span>
      </div>
      {#if compareSelection.length}
        <div class="compare-chip-row">
          {#each compareSelection as center}
            <button type="button" class="compare-chip" on:click={() => toggleCompare(center)}>
              <strong>{center.name}</strong>
              <span>{center.city}</span>
            </button>
          {/each}
        </div>
        <div class="compare-mini-grid" aria-label={language === 'it' ? 'Confronto rapido' : 'Quick compare'}>
          {#each compareSelection as center}
            <article class="compare-mini-card">
              <div class="compare-mini-title">
                <strong>{center.name}</strong>
                <span>{center.city}</span>
              </div>
              <div class="compare-mini-metrics">
                <span>{reviewSummary(center.id)?.score ? `${reviewSummary(center.id).score}/10` : '—/10'} {language === 'it' ? 'review' : 'review'}</span>
                <span>{center.completeness}% {t.completeness}</span>
                <span>{center.access.join(' · ')}</span>
                <span>{center.technologies.length ? center.technologies.slice(0, 2).join(' · ') : (language === 'it' ? 'Tecnologie non specificate' : 'Technology not specified')}</span>
              </div>
            </article>
          {/each}
        </div>
      {:else}
        <p class="compare-empty">{language === 'it' ? 'Aggiungi centri con il pulsante Confronta per vedere un riepilogo rapido.' : 'Add centers with the Compare button to see a quick summary.'}</p>
      {/if}
    </div>
    <div class="center-grid">
      {#each paginatedCenters as center}
        <article class:selected={selected?.id === center.id} class="center-card">
          <div class="center-card-top">
            <div>
              <h3>{center.name}</h3>
              <p>{center.city} · {center.region}</p>
            </div>
            <button type="button" class="icon-button" on:click={() => pick(center)} aria-label={language === 'it' ? 'Mostra sulla mappa' : 'Show on map'}><MapPin size={16} /></button>
          </div>
          <p class="center-card-desc">{center.description[language]}</p>
          <div class="center-card-tags">
            <span>{center.conditions.slice(0, 2).map((item) => conditionLabels[item]?.[language] ?? item).join(' · ')}</span>
            <span>{center.access.join(' · ')}</span>
          </div>
          {#if reviewSummary(center.id) || center.researchHighlights?.length || center.robotNotes?.length}
            <div class="center-card-highlights">
              {#if reviewSummary(center.id)}
                <span>{language === 'it' ? 'Review' : 'Review'} {reviewSummary(center.id).score}/10</span>
              {/if}
              {#if center.researchHighlights?.length}
                <span>{language === 'it' ? 'Research' : 'Research'}</span>
              {/if}
              {#if center.robotNotes?.length}
                <span>{language === 'it' ? 'Robotics' : 'Robotics'}</span>
              {/if}
            </div>
          {/if}
          <p class="center-card-contact"><Phone size={15} /> <span>{center.phone}</span></p>
          <div class="center-card-actions">
            <a class="button secondary compact" href={`/center/${center.id}`}>{language === 'it' ? 'Apri dettagli' : 'Open details'}</a>
            <button type="button" class="button secondary compact" on:click={() => pick(center)}>{language === 'it' ? 'Apri mappa' : 'Open map'}</button>
            <button type="button" class="button secondary compact" on:click={() => toggleCompare(center)}>
              <ArrowLeftRight size={16} />
              {compareIds.includes(center.id) ? (language === 'it' ? 'Tolto confronto' : 'Remove compare') : (language === 'it' ? 'Confronta' : 'Compare')}
            </button>
          </div>
        </article>
      {:else}
        <div class="empty center-empty"><Search size={28} /><strong>{language === 'it' ? 'Nessun centro corrisponde ai filtri' : 'No centers match these filters'}</strong><button type="button" class="text-button" on:click={resetFilters}>{t.clear}</button></div>
      {/each}
    </div>
    {#if filtered.length > pageSize}
      <div class="pager" aria-label={language === 'it' ? 'Paginazione centri' : 'Clinic list pagination'}>
        <button type="button" class="button secondary compact" on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          {language === 'it' ? 'Precedente' : 'Previous'}
        </button>
        <div class="pager-pages">
          {#if pageWindow[0] > 1}
            <button type="button" class="pager-page" on:click={() => goToPage(1)}>1</button>
            {#if pageWindow[0] > 2}<span>…</span>{/if}
          {/if}
          {#each pageWindow as page}
            <button class:active={page === currentPage} type="button" class="pager-page" on:click={() => goToPage(page)}>{page}</button>
          {/each}
          {#if pageWindow[pageWindow.length - 1] < totalPages}
            {#if pageWindow[pageWindow.length - 1] < totalPages - 1}<span>…</span>{/if}
            <button type="button" class="pager-page" on:click={() => goToPage(totalPages)}>{totalPages}</button>
          {/if}
        </div>
        <button type="button" class="button secondary compact" on:click={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          {language === 'it' ? 'Successivo' : 'Next'}
        </button>
      </div>
    {/if}
  </section>

  <details class="meta-panel">
    <summary>
      <span><Scale size={16} /> {language === 'it' ? 'Dati e moderazione' : 'Data & moderation'}</span>
      <span>{centers.length} {language === 'it' ? 'centri' : 'centers'} · {moderationQueue.length} {t.queueItems}</span>
    </summary>
    <div class="legend-queue">
      <article class="legend-panel">
        <div class="panel-head">
          <div>
            <span class="panel-kicker"><Scale size={16} /> {t.mapLegend}</span>
            <h2>{t.legendTitle}</h2>
          </div>
          <span class="panel-chip">{language === 'it' ? 'Italia first' : 'Italy first'}</span>
        </div>
        <div class="legend-grid">
          <div class="legend-item"><span class="legend-pin teal">1</span><div><strong>{t.legendOrderTitle}</strong><p>{t.legendOrderBody}</p></div></div>
          <div class="legend-item"><span class="legend-pin oxblood">2</span><div><strong>{t.legendSelectedTitle}</strong><p>{t.legendSelectedBody}</p></div></div>
          <div class="legend-item"><span class="legend-pin outline"><ShieldCheck size={15} /></span><div><strong>{t.legendTrustTitle}</strong><p>{t.legendTrustBody}</p></div></div>
          <div class="legend-item"><span class="legend-pin muted"><Info size={15} /></span><div><strong>{t.legendMissingTitle}</strong><p>{t.legendMissingBody}</p></div></div>
        </div>
      </article>

      <article class="queue-panel" aria-live="polite">
        <div class="panel-head">
          <div>
            <span class="panel-kicker"><ShieldAlert size={16} /> {t.queueKicker}</span>
            <h2>{t.queueTitle}</h2>
          </div>
          <span class="panel-chip">{moderationQueue.length} {t.queueItems}</span>
        </div>
        <p class="panel-note">{t.queueNote}</p>
        <div class="queue-columns">
          <section>
            <div class="queue-column-head"><strong>{t.pendingReviews}</strong><span>{pendingReviews.length}</span></div>
            {#if pendingReviews.length}
              <div class="queue-list">
                {#each pendingReviews.slice(0, 3) as item}
                  <article class="queue-card">
                    <div class="queue-card-head"><strong>{centerName(item.centerId)}</strong><span>{formatSubmittedAt(item.submittedAt)}</span></div>
                    <div class="queue-badges"><span>{item.period}</span><span>{queueLabel(item)}</span><span>{item.status}</span></div>
                    <p>{language === 'it' ? 'Moderazione richiesta su esperienza utente.' : 'User experience awaiting moderation.'}</p>
                    <div class="queue-actions">
                      <button type="button" class="button secondary compact" on:click={() => reviewQueueItem(item.id, 'approved')}>{language === 'it' ? 'Approva' : 'Approve'}</button>
                      <button type="button" class="button secondary compact" on:click={() => reviewQueueItem(item.id, 'rejected')}>{language === 'it' ? 'Rifiuta' : 'Reject'}</button>
                    </div>
                  </article>
                {/each}
              </div>
            {:else}
              <p class="queue-empty">{t.noQueueItems}</p>
            {/if}
          </section>
          <section>
            <div class="queue-column-head"><strong>{t.pendingCenters}</strong><span>{pendingCenters.length}</span></div>
            {#if pendingCenters.length}
              <div class="queue-list">
                {#each pendingCenters.slice(0, 3) as item}
                  <article class="queue-card">
                    <div class="queue-card-head"><strong>{item.centerName}</strong><span>{formatSubmittedAt(item.submittedAt)}</span></div>
                    <div class="queue-badges"><span>{item.city}</span><span>{queueLabel(item)}</span><span>{item.status}</span></div>
                    <p>{item.officialUrl}</p>
                    <div class="queue-actions">
                      <button type="button" class="button secondary compact" on:click={() => reviewQueueItem(item.id, 'approved')}>{language === 'it' ? 'Approva' : 'Approve'}</button>
                      <button type="button" class="button secondary compact" on:click={() => reviewQueueItem(item.id, 'rejected')}>{language === 'it' ? 'Rifiuta' : 'Reject'}</button>
                    </div>
                  </article>
                {/each}
              </div>
            {:else}
              <p class="queue-empty">{t.noQueueItems}</p>
            {/if}
          </section>
        </div>
        {#if moderationQueue.some((item) => item.status !== 'pending')}
          <div class="queue-history">
            <div class="queue-column-head"><strong>{language === 'it' ? 'Storico moderazione' : 'Moderation history'}</strong><span>{moderationQueue.filter((item) => item.status !== 'pending').length}</span></div>
            <div class="queue-list">
              {#each moderationQueue.filter((item) => item.status !== 'pending').slice(0, 4) as item}
                <article class="queue-card history-card">
                  <div class="queue-card-head"><strong>{item.kind === 'review' ? centerName(item.centerId) : item.centerName}</strong><span>{formatSubmittedAt(item.reviewedAt || item.submittedAt)}</span></div>
                  <div class="queue-badges"><span>{queueLabel(item)}</span><span>{item.status}</span><span>{item.kind}</span></div>
                  <div class="queue-actions">
                    <button type="button" class="button secondary compact" on:click={() => reviewQueueItem(item.id, 'pending')}>{language === 'it' ? 'Ripristina' : 'Restore'}</button>
                    <button type="button" class="button secondary compact" on:click={() => removeQueueItem(item.id)}>{language === 'it' ? 'Elimina' : 'Remove'}</button>
                  </div>
                </article>
              {/each}
            </div>
          </div>
        {/if}
      </article>
    </div>
  </details>

  <section class="method" id="method">
    <div class="method-intro"><h2>{t.scoreTitle}</h2><p>{t.scoreIntro}</p></div>
    <div class="method-items">
      <article><span><ShieldCheck /></span><h3>{t.factsTitle}</h3><p>{t.factsBody}</p></article>
      <article><span><Users /></span><h3>{t.communityTitle}</h3><p>{t.communityBody}</p></article>
      <article><span><ClipboardList /></span><h3>{t.dataTitle}</h3><p>{t.dataBody}</p></article>
    </div>
  </section>
</main>

<footer><div class="brand"><span class="brand-mark"><MapPin size={20} /></span><span>Neurovia</span></div><p>{language === 'it' ? 'Uno strumento informativo, non un servizio di consulenza medica.' : 'An information tool, not a medical advice service.'}</p></footer>

<dialog bind:this={reviewDialog} aria-labelledby="review-title">
  <form method="dialog" class="dialog-form" on:submit|preventDefault={(event) => submitForModeration(event, reviewDialog, 'review')}>
    <div class="dialog-head"><div><span class="dialog-icon"><Star /></span><h2 id="review-title">{t.reviewTitle}</h2><p>{selected?.name}</p></div><button type="button" class="icon-button" on:click={() => reviewDialog.close()} aria-label={t.close}><X /></button></div>
    <div class="privacy-note"><Info size={18} /> {t.privacy}</div>
    <label class="field"><span>{t.period}</span><input name="period" type="month" required /></label>
    <div class="rating-grid">
      {#each reviewCategories as [key, label]}
        <label class="field"><span>{label[language]}</span><select name={key} required><option value="">— /10</option>{#each Array(10) as _, index}<option value={index + 1}>{index + 1}/10</option>{/each}</select></label>
      {/each}
    </div>
    <label class="field"><span>{t.comment}</span><textarea name="comment" rows="4" maxlength="800" placeholder={language === 'it' ? 'Condividi informazioni concrete su comunicazione, assistenza e organizzazione.' : 'Share concrete information about communication, care and organization.'}></textarea></label>
    <label class="relation"><input name="relationship" type="checkbox" value="confirmed" required /> <span>{t.relation}</span></label>
    <div class="dialog-actions"><button class="button secondary" type="button" on:click={() => reviewDialog.close()}>{t.cancel}</button><button class="button primary" type="submit">{t.submitModeration}</button></div>
  </form>
</dialog>

<dialog bind:this={centerDialog} aria-labelledby="center-title">
  <form method="dialog" class="dialog-form" on:submit|preventDefault={(event) => submitForModeration(event, centerDialog, 'center')}>
    <div class="dialog-head"><div><span class="dialog-icon"><Building2 /></span><h2 id="center-title">{t.newTitle}</h2><p>{language === 'it' ? 'Controlleremo la fonte e i possibili duplicati.' : 'We will verify the source and check for duplicates.'}</p></div><button type="button" class="icon-button" on:click={() => centerDialog.close()} aria-label={t.close}><X /></button></div>
    <div class="form-columns"><label class="field"><span>{t.centerName}</span><input name="centerName" required /></label><label class="field"><span>{t.city}</span><input name="city" required /></label></div>
    <label class="field"><span>{t.officialUrl}</span><input name="officialUrl" type="url" placeholder="https://" required /></label>
    <label class="field"><span>{t.email}</span><input name="email" type="email" required /></label>
    <label class="relation"><input name="sourceConfirmed" type="checkbox" required /> <span>{language === 'it' ? 'Confermo che il link appartiene al centro o a un ente sanitario ufficiale.' : 'I confirm the link belongs to the center or an official health authority.'}</span></label>
    <div class="dialog-actions"><button class="button secondary" type="button" on:click={() => centerDialog.close()}>{t.cancel}</button><button class="button primary" type="submit">{t.submitModeration}</button></div>
  </form>
</dialog>

<dialog bind:this={compareDialog} aria-labelledby="compare-title">
  <div class="dialog-form compare-form">
    <div class="dialog-head">
      <div>
        <span class="dialog-icon"><ArrowLeftRight /></span>
        <h2 id="compare-title">{t.compareTitle}</h2>
        <p>{selected?.name}</p>
      </div>
      <button type="button" class="icon-button" on:click={() => compareDialog.close()} aria-label={t.close}><X /></button>
    </div>

    <div class="compare-selector">
      <label class="field">
        <span>{t.compareWith}</span>
        <select bind:value={compareTargetId}>
          {#each compareOptions as center}
            <option value={center.id}>{center.name} · {center.city}</option>
          {/each}
        </select>
      </label>
      <div class="compare-note">{t.compareNote}</div>
    </div>

    <div class="compare-grid" aria-label={t.compareTitle}>
      <div class="compare-head">
        <span></span>
        <strong>{selected?.name || ''}</strong>
        <strong>{compareTarget?.name || ''}</strong>
      </div>
      {#each [
        [t.compareDisciplines, metricFor(selected).disciplines, metricFor(compareTarget).disciplines],
        [t.compareConditions, metricFor(selected).conditions, metricFor(compareTarget).conditions],
        [t.compareTechnology, metricFor(selected).technologies, metricFor(compareTarget).technologies],
        [t.compareAccess, metricFor(selected).access, metricFor(compareTarget).access],
        [t.compareModes, metricFor(selected).modes, metricFor(compareTarget).modes],
        [t.completeness, `${metricFor(selected).completeness}%`, `${metricFor(compareTarget).completeness}%`]
      ] as [label, left, right]}
        <div class="compare-row">
          <span>{label}</span>
          <strong>{left}</strong>
          <strong>{right}</strong>
        </div>
      {/each}
    </div>
  </div>
</dialog>

{#if toast}<div class="toast" role="status"><CheckCircle2 /> {toast}</div>{/if}
