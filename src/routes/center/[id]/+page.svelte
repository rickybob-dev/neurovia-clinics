<script>
  import { ArrowLeft, Bot, BookOpenText, HeartPulse, Hospital, MapPin, ShieldCheck, Stethoscope } from '@lucide/svelte';
  export let data;

  const scoreItems = (center) => [
    {
      icon: Stethoscope,
      label: 'Doctors',
      score: Math.min(10, 6 + Math.floor(center.disciplines.filter((item) => item.includes('Neu') || item.includes('Fisi')).length / 2))
    },
    {
      icon: HeartPulse,
      label: 'Rehab',
      score: Math.min(10, 6 + Math.floor(center.conditions.length / 2))
    },
    {
      icon: Hospital,
      label: 'Hospital',
      score: center.modes.includes('inpatient') ? 9 : 7
    },
    {
      icon: Bot,
      label: 'Robotics',
      score: center.technologies.includes('robotics') || center.technologies.includes('exoskeleton') ? 9 : 4
    }
  ];

  function tone(score) {
    if (score >= 9) return 'high';
    if (score >= 7) return 'mid';
    return 'low';
  }
</script>

<svelte:head>
  <title>Neurovia — {data.center.name}</title>
</svelte:head>

<main class="detail-page">
  <a class="back-link" href="/">
    <ArrowLeft size={16} />
    <span>Back to map</span>
  </a>

  <section class="detail-hero">
    <div>
      <p class="eyebrow">Selected center</p>
      <h1>{data.center.name}</h1>
      <p class="lede">{data.center.city} · {data.center.region}</p>
    </div>
    <a class="button secondary" href={data.center.url} target="_blank" rel="noreferrer">Open official source</a>
  </section>

  <section class="detail-grid">
    <article class="detail-card">
      <div class="card-head">
        <span><ShieldCheck size={16} /></span>
        <h2>Profile indicators</h2>
      </div>
      <div class="indicator-row">
        {#each scoreItems(data.center) as item}
          <div class={`indicator-card tone-${tone(item.score)}`}>
            <svelte:component this={item.icon} size={18} />
            <span>{item.label}</span>
            <strong>{item.score}/10</strong>
          </div>
        {/each}
      </div>
      <p class="fine-print">These are profile indicators based on the official profile and the center taxonomy, not a clinical ranking.</p>
    </article>

    <article class="detail-card">
      <div class="card-head">
        <MapPin size={16} />
        <h2>Contact</h2>
      </div>
      <p>{data.center.address}</p>
      <p><a href={`tel:${data.center.phone}`}>{data.center.phone}</a></p>
      <p>{data.center.access.join(' · ')}</p>
    </article>

    <article class="detail-card">
      <div class="card-head">
        <span><Hospital size={16} /></span>
        <h2>Services</h2>
      </div>
      <p>{data.center.description.en}</p>
      <p><strong>Conditions:</strong> {data.center.conditions.join(' · ')}</p>
      <p><strong>Technologies:</strong> {data.center.technologies.length ? data.center.technologies.join(' · ') : 'Not specified'}</p>
      <p><strong>Disciplines:</strong> {data.center.disciplines.join(' · ')}</p>
    </article>

    <article class="detail-card">
      <div class="card-head">
        <span><BookOpenText size={16} /></span>
        <h2>Research and robotics</h2>
      </div>
      {#if data.center.researchHighlights?.length}
        <div class="detail-chip-stack">
          {#each data.center.researchHighlights.slice(0, 3) as highlight}
            <span>{highlight}</span>
          {/each}
        </div>
      {:else}
        <p class="fine-print">No research notes are attached to this center yet.</p>
      {/if}
      {#if data.center.robotNotes?.length}
        <div class="detail-robot-row">
          <Bot size={16} />
          <div>
            <strong>Robotics / devices</strong>
            <p>{data.center.robotNotes.join(' · ')}</p>
          </div>
        </div>
      {/if}
    </article>
  </section>
</main>

<style>
  .detail-page {
    min-height: 100vh;
    padding: 1.5rem clamp(1rem, 4vw, 4rem) 3rem;
    background: radial-gradient(circle at top, oklch(.99 .006 85), oklch(.965 .01 85) 50%, oklch(.955 .01 85));
    color: var(--ink);
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    color: var(--teal-dark);
    text-decoration: none;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .detail-hero {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: end;
    padding: 1.25rem;
    border: 1px solid color-mix(in oklch, var(--line) 70%, transparent);
    border-radius: 1.25rem;
    background: white;
    box-shadow: 0 10px 24px oklch(.2 .02 230 / .06);
    margin-bottom: 1rem;
  }

  .eyebrow {
    margin: 0 0 .4rem;
    color: var(--oxblood);
    font-size: .85rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .08em;
  }

  h1 {
    margin: 0;
    color: var(--teal-dark);
    font-size: clamp(2rem, 4vw, 3.5rem);
    line-height: 1.05;
  }

  .lede { margin: .4rem 0 0; color: var(--slate); }

  .detail-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .detail-card {
    padding: 1.1rem;
    border: 1px solid color-mix(in oklch, var(--line) 70%, transparent);
    border-radius: 1rem;
    background: linear-gradient(180deg, white, var(--surface));
    box-shadow: 0 1px 0 oklch(.2 .02 230 / .04);
  }

  .card-head {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-bottom: .9rem;
    color: var(--teal-dark);
  }

  .card-head h2 {
    margin: 0;
    font-size: 1.1rem;
  }

  .indicator-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: .75rem;
  }

  .indicator-card {
    display: grid;
    gap: .3rem;
    padding: .8rem;
    border-radius: .9rem;
    border: 1px solid var(--line);
    background: white;
  }

  .indicator-card span { color: var(--slate); font-size: .88rem; }
  .indicator-card strong { color: var(--teal-dark); font-size: 1.2rem; }
  .tone-high { border-color: color-mix(in oklch, var(--green) 55%, white); }
  .tone-mid { border-color: color-mix(in oklch, var(--warning) 55%, white); }
  .tone-low { border-color: color-mix(in oklch, var(--line) 85%, white); }
  p { margin: 0 0 .75rem; }
  .fine-print { color: var(--slate); font-size: .85rem; }
  .detail-chip-stack {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-bottom: .75rem;
  }
  .detail-chip-stack span {
    padding: .35rem .6rem;
    border-radius: 999px;
    background: var(--aqua);
    color: var(--teal-dark);
    font-size: .88rem;
    font-weight: 700;
  }
  .detail-robot-row {
    display: flex;
    gap: .6rem;
    align-items: flex-start;
    padding: .85rem;
    border-radius: .85rem;
    background: white;
    border: 1px solid var(--line);
  }
  .detail-robot-row strong { display: block; margin-bottom: .2rem; color: var(--teal-dark); }
  .detail-robot-row p { margin: 0; color: var(--slate); }

  @media (max-width: 900px) {
    .detail-grid { grid-template-columns: 1fr; }
    .detail-hero { flex-direction: column; align-items: start; }
  }

  @media (max-width: 640px) {
    .indicator-row { grid-template-columns: 1fr; }
  }
</style>
