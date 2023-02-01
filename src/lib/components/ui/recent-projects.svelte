<script lang="ts">
	import ThumbnailCarousel from './carousel/thumbnail-carousel.svelte';

	export let projects: any[] = [];
	const filters = [
		{ label: 'Toate', value: '' },
		{ label: 'Parter', value: 'Parter' },
		{ label: 'Mansardă', value: 'Mansarda' },
		{ label: 'Etaj', value: 'Etaj' },
		{ label: 'Altele', value: 'Altele' }
	];
	let activeFilter = filters[0];

	$: getProjects = activeFilter.value
		? projects.filter((p) =>
				p.project_types.map(({ type }: { type: string }) => type).includes(activeFilter.value)
		  )
		: projects;
</script>

<article class="pageSection projects">
	<h2 class="h2">Proiecte recente</h2>
	<div class="filters">
		{#each filters as filter}
			<button
				type="button"
				class="body--large"
				class:active={activeFilter.value === filter.value}
				on:click={() => (activeFilter = filter)}
			>
				{filter.label}
			</button>
		{/each}
	</div>
	{#if getProjects.length}
		{#each getProjects as project (project.name)}
			<section class="project">
				<ThumbnailCarousel slides={project.images} />
				<h3 class="h3">{project.name}</h3>
			</section>
		{/each}
	{:else}
		<h3 class="h3">Niciun rezultat pentru proiecte tip '{activeFilter.label}'.</h3>
	{/if}
</article>

<style>
	.projects {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-items: center;
		gap: 1rem;
		text-align: center;
		width: fit-content;
		margin: auto;
	}
	.projects h2 {
		grid-column: 1/3;
		padding-bottom: 2rem;
	}
	.projects h3 {
		grid-column: 1/3;
	}
	.filters {
		display: flex;
		gap: 3rem;
		grid-column: 1/3;
		padding: 1rem 2rem;
		margin-bottom: 3rem;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}
	.filters button {
		padding: 1rem;
	}
	.filters button.active {
		color: var(--primary-color);
	}
	.project {
		width: 65rem;
	}
</style>
