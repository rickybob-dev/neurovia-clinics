<script>
  import { onMount } from 'svelte';
  import { MapPin, Search, SlidersHorizontal, ShieldCheck, ExternalLink, Phone, Bookmark, X, CheckCircle2, Users, ClipboardList, Plus, Languages, ChevronDown, Star, Info, Building2, Menu, Scale, ShieldAlert, Clock3, ArrowLeftRight } from '@lucide/svelte';
  import ClinicMap from '$lib/components/ClinicMap.svelte';
  import { centers, conditionLabels, technologyLabels } from '$lib/data/centers.js';
  import { copy } from '$lib/i18n.js';

  let language = 'it';
  let selected = centers[0];
  let query = '';
  let condition = '';
  let technology = '';
  let ssnOnly = false;
  let inpatientOnly = false;
  let mobileView = 'list';
  let reviewDialog;
  let centerDialog;
  let compareDialog;
  let toast = '';
  let saved = new Set();
  let menuOpen = false;
  let centerMetrics = [];
  let moderationQueue = [];
  let compareTargetId = centers[1].id;

  $: t = copy[language];
  $: normalized = query.trim().toLocaleLowerCase(language);
  $: filtered = centers.filter((center) => {
    const searchable = [center.name, center.city, center.region, ...center.conditions.map((item) => conditionLabels[item][language])].join(' ').toLocaleLowerCase(language);
    return (!normalized || searchable.includes(normalized)) &&
      (!condition || center.conditions.includes(condition)) &&
      (!technology || center.technologies.includes(technology)) &&
      (!ssnOnly || center.access.includes('SSN')) &&
      (!inpatientOnly || center.modes.includes('inpatient'));
  });
  $: centerMetrics = [
    { value: centers.length, label: language === 'it' ? 'Centri verificati in Italia' : 'Verified centers in Italy' },
    { value: `${filtered.length}/${centers.length}`, label: language === 'it' ? 'Risultati attuali' : 'Current results' },
    { value: '6/10', label: language === 'it' ? 'Dimensioni di valutazione' : 'Review dimensions' }
  ];
  $: compareOptions = filtered.filter((center) => center.id !== selected.id);
  $: if (!compareOptions.some((center) => center.id === compareTargetId)) {
    compareTargetId = compareOptions[0]?.id || selected.id;
  }
  $: compareTarget = centers.find((center) => center.id === compareTargetId) || compareOptions[0] || selected;
  $: pendingReviews = moderationQueue.filter((item) => item.kind === 'review');
  $: pendingCenters = moderationQueue.filter((item) => item.kind === 'center');

  onMount(() => {
    const storedLanguage = localStorage.getItem('neurovia-language');
    if (storedLanguage === 'it' || storedLanguage === 'en') language = storedLanguage;
    moderationQueue = JSON.parse(localStorage.getItem('neurovia-moderation-queue') || '[]');
  });

  function setLanguage(value) {
    language = value;
    localStorage.setItem('neurovia-language', value);
    document.documentElement.lang = value;
  }

  function pick(center) {
    selected = center;
    if (innerWidth < 761) mobileView = 'map';
  }

  function resetFilters() {
    query = ''; condition = ''; technology = ''; ssnOnly = false; inpatientOnly = false;
  }

  function toggleSaved() {
    const next = new Set(saved);
    next.has(selected.id) ? next.delete(selected.id) : next.add(selected.id);
    saved = next;
  }

  function loadQueue() {
    moderationQueue = JSON.parse(localStorage.getItem('neurovia-moderation-queue') || '[]');
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
    if (!compareOptions.length) return;
    compareTargetId = compareOptions[0]?.id || selected.id;
    compareDialog.showModal();
  }

  function formatSubmittedAt(value) {
    return new Intl.DateTimeFormat(language === 'it' ? 'it-IT' : 'en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(value));
  }

  function metricFor(center) {
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
      <div class="hero-metrics" aria-label={language === 'it' ? 'Panoramica rapida' : 'Quick overview'}>
        {#each centerMetrics as metric}
          <div class="metric-card">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        {/each}
      </div>
    </div>
    <div class="trust-note"><ShieldCheck size={24} /><span>{language === 'it' ? 'Dati ufficiali collegati alla fonte. Nessuna classifica inventata.' : 'Official facts linked to source. No invented rankings.'}</span></div>
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
  </section>

  <div class="view-toggle" role="group" aria-label="View">
    <button class:active={mobileView === 'list'} type="button" on:click={() => (mobileView = 'list')}>{t.list}</button>
    <button class:active={mobileView === 'map'} type="button" on:click={() => (mobileView = 'map')}>{t.map}</button>
  </div>

  <section class="workspace" class:show-map={mobileView === 'map'}>
    <aside class="results" aria-label={`${filtered.length} ${t.results}`}>
      <div class="results-head"><strong>{filtered.length} {t.results}</strong><span>{language === 'it' ? 'Ordine: rilevanza' : 'Sort: relevance'}</span></div>
      <div class="result-list">
        {#each filtered as center, index}
          <button type="button" class:selected={selected.id === center.id} class="result" on:click={() => pick(center)} aria-pressed={selected.id === center.id}>
            <span class="result-index">{index + 1}</span>
            <span class="result-main">
              <strong>{center.name}</strong><span>{center.city} · {center.region}</span>
              <span class="verified-line"><CheckCircle2 size={15} /> {t.verified}</span>
              <span class="tags">{center.conditions.slice(0, 3).map((item) => conditionLabels[item][language]).join(' · ')}</span>
              <span class="score-empty"><Star size={15} /> {t.noScore}</span>
            </span>
            <Bookmark size={19} aria-hidden="true" />
          </button>
        {:else}
          <div class="empty"><Search size={28} /><strong>{language === 'it' ? 'Nessun centro corrisponde ai filtri' : 'No centers match these filters'}</strong><button type="button" class="text-button" on:click={resetFilters}>{t.clear}</button></div>
        {/each}
      </div>
    </aside>

    <div class="map-pane"><ClinicMap centers={filtered} selectedId={selected.id} {language} on:select={(event) => pick(event.detail)} /></div>

    <aside class="detail" aria-live="polite">
      <div class="detail-head">
        <span class="detail-pin"><MapPin size={21} /></span>
        <div><h2>{selected.name}</h2><p>{selected.city} · {selected.region}</p></div>
        <button class="icon-button mobile-detail-close" type="button" on:click={() => (mobileView = 'list')} aria-label={t.close}><X /></button>
      </div>
      <div class="verified-box"><ShieldCheck size={23} /><div><strong>{t.verified}</strong><p>{t.verifiedBody}</p></div></div>
      <p class="description">{selected.description[language]}</p>

      <section class="detail-section">
        <h3>{t.address}</h3>
        <p class="info-row"><MapPin size={17} /> <span>{selected.address}</span></p>
        <p class="info-row"><Phone size={17} /> <a href={`tel:${selected.phone}`}>{selected.phone}</a></p>
        <div class="badges"><span>{selected.modes.includes('inpatient') ? t.inpatient : language === 'it' ? 'Ambulatoriale' : 'Outpatient'}</span>{#each selected.access as item}<span>{item}</span>{/each}</div>
      </section>

      <section class="detail-section">
        <h3>{t.conditions}</h3>
        <div class="tags-wrap">{#each selected.conditions as item}<span>{conditionLabels[item][language]}</span>{/each}</div>
      </section>

      <section class="detail-section">
        <h3>{t.technologies}</h3>
        <div class="tags-wrap">{#each selected.technologies as item}<span>{technologyLabels[item][language]}</span>{/each}</div>
      </section>

      <section class="detail-section">
        <h3>{t.disciplines}</h3>
        <div class="tags-wrap">{#each selected.disciplines as item}<span>{item}</span>{/each}</div>
      </section>

      <section class="detail-section score-section">
        <div class="section-title"><h3>{t.community}</h3><Info size={16} /></div>
        <div class="no-score"><span>—<small>/10</small></span><div><strong>{t.noScore}</strong><p>{t.insufficient}</p></div></div>
      </section>

      <section class="detail-section">
        <div class="section-title"><h3>{t.completeness}</h3><strong>{selected.completeness}%</strong></div>
        <div class="progress" role="progressbar" aria-valuenow={selected.completeness} aria-valuemin="0" aria-valuemax="100"><span style={`width:${selected.completeness}%`}></span></div>
        <p class="fine-print">{t.completenessNote}</p>
      </section>

      <div class="detail-actions">
        <a class="button secondary" href={selected.url} target="_blank" rel="noreferrer">{t.source}<ExternalLink size={16} /></a>
        <div><button class="button secondary" type="button" on:click={toggleSaved}><Bookmark size={17} fill={saved.has(selected.id) ? 'currentColor' : 'none'} /> {t.save}</button><button class="button secondary" type="button" disabled={!compareOptions.length} on:click={openCompare}><ArrowLeftRight size={17} /> {t.compare}</button><button class="button primary" type="button" on:click={() => reviewDialog.showModal()}>{t.review}</button></div>
      </div>
    </aside>
  </section>

  <section class="legend-queue">
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
                  <div class="queue-card-head"><strong>{centers.find((center) => center.id === item.centerId)?.name || t.unknownCenter}</strong><span>{formatSubmittedAt(item.submittedAt)}</span></div>
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
  </section>

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
    <div class="dialog-head"><div><span class="dialog-icon"><Star /></span><h2 id="review-title">{t.reviewTitle}</h2><p>{selected.name}</p></div><button type="button" class="icon-button" on:click={() => reviewDialog.close()} aria-label={t.close}><X /></button></div>
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
        <p>{selected.name}</p>
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
        <strong>{selected.name}</strong>
        <strong>{compareTarget.name}</strong>
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
