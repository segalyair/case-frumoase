<script lang="ts">
	import { page } from '$app/stores';
	import PictureBuilder from '$lib/components/ui/picture-builder.svelte';
	import { pagefind } from '$lib/store';
	import Spinner from '$lib/svgs/spinner.svg?raw';
	import { onMount } from 'svelte';

	let pagefindLoaded = false,
		results: any[] = [],
		loading: boolean = true,
		searchValue: string | null;

	async function runSearch() {
		searchValue = $page.url.searchParams.get('q');
		loading = true;
		if (!pagefindLoaded || !searchValue) {
			loading = false;
			return;
		}

		const rawResults = (await $pagefind.search(searchValue)).results;
		results = await Promise.all(rawResults.slice(0, 5).map((r: any) => r.data()));
		for (const result of results) {
			if (typeof result.meta.thumbnail === 'string') {
				const parseThumbnail = new DOMParser().parseFromString(result.meta.thumbnail, 'text/html');
				result.meta.thumbnail = JSON.parse(parseThumbnail.documentElement.textContent ?? '');
			}
		}
		loading = false;
	}

	onMount(() => {
		const pageUnsub = page.subscribe(async (p) => await runSearch());

		window.setPageFind = (value) => {
			pagefind.set(value);
		};
		window.dispatchEvent(new CustomEvent('ready'));
		const pagefindUnsub = pagefind.subscribe(async (pagefind) => {
			if (!pagefind || pagefindLoaded) return;
			pagefindLoaded = true;
			await runSearch();
		});
		return () => {
			pageUnsub();
			pagefindUnsub();
		};
	});
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<script>
		window.addEventListener(
			'ready',
			async () => {
				const urlParams = new URLSearchParams(window.location.search);
				if (!urlParams.get('q')) {
					return;
				}
				const pagefind = await import('/pagefind/pagefind.js');
				window.setPageFind(pagefind);
			},
			{ once: true }
		);
	</script>
</svelte:head>

<div class="container body--vlarge">
	{#if loading}
		<div class="noContent">
			{@html Spinner}
		</div>
	{:else if results?.length}
		<h1 class="h2">Rezultate</h1>
		{#each results as result, i}
			<a class="link" href={result.url.split('.')[0]}>
				<span class="tag body">{result.url.includes('proiecte') ? 'Proiect' : 'Blog'}</span>
				<PictureBuilder class="resultImage" picture={result.meta.thumbnail} loading="lazy" />
				<h2 class="h4">{@html result.meta.title}</h2>
			</a>
		{/each}
	{:else}
		<div class="noContent">
			<h1 class="h3">Nu am putut găsi vreun rezultat la căutarea dumneavoastră: {searchValue}</h1>
		</div>
	{/if}
</div>

<style>
	.container {
		max-width: 120rem;
		padding: 4rem;
		margin: auto;
		margin-top: var(--menu-height);
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		row-gap: 2rem;
	}
	.noContent {
		height: calc(100vh - var(--menu-height));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		grid-column: span 2;
	}
	h1 {
		text-align: center;
		margin-bottom: 2rem;
		grid-column: span 2;
	}
	h2 {
		margin: 0 2rem;
	}
	.link {
		width: 50rem;
		position: relative;
		display: grid;
		grid-template-rows: min-content min-content;
		gap: 1rem;
		padding-bottom: 1rem;
		border: 2px solid transparent;
		transition: border-color 200ms;
	}
	.link:hover {
		border-color: var(--primary-color);
	}
	.link :global(.resultImage) {
		width: 100%;
		height: 36.5rem;
		object-fit: cover;
	}
	.tag {
		position: absolute;
		top: 1rem;
		right: 1rem;
		color: white;
		width: 8rem;
		text-align: center;
		background-color: var(--primary-color);
		padding: 1rem;
	}

	@media only screen and (max-width: 1100px) {
		.container {
			grid-template-columns: 1fr;
			padding: 0;
		}
		h1 {
			grid-column: 1;
		}
	}
	@media only screen and (max-width: 500px) {
		.link{
			width: 30rem;
		}
		/* .link :global(.resultImage) {
			width: 30rem;
			height: auto;
		} */
	}
</style>
