<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/ui/breadcrumbs.svelte';
	import ThumbnailCarousel from '$lib/components/ui/carousel/thumbnail-carousel.svelte';
	// import ImageList from '$lib/components/ui/project/image-list.svelte';
	import type { Project } from '@customTypes/project';
	import { onMount } from 'svelte';

	export let data: { project: Project };
	const { project } = data;
	onMount(() => {
		try {
			window.CUSDIS.initial();
		} catch {
			//TO DO: Why is this throwing an error locally?
		}
	});
</script>

<div class="container">
	<header>
		<h1 class="h1" data-pagefind-body>{project.name}</h1>
		<Breadcrumbs />
	</header>
	<main class="body--vlarge">
		<ThumbnailCarousel
			pictures={project.pictures}
			fullsizePictures={project.fullSizePictures ?? []}
			thumbnails={project.paginationPictures ?? []}
		/>

		<div class="content" data-pagefind-body>
			{@html project.content}
		</div>

		<div
			id="cusdis_thread"
			data-host="https://case-frumoase-comments-kxxoe1hx1-segalyair.vercel.app"
			data-app-id="58968d46-abc8-44d6-b381-b9e6fa36dfce"
			data-page-id={project.slug}
			data-page-url={$page.url}
			data-page-title={project.name}
		></div>
		<script
			async
			defer
			src="https://case-frumoase-comments-kxxoe1hx1-segalyair.vercel.app/js/cusdis.es.js"
			nonce="lulz"
		></script>
	</main>

	<!-- <ImageList pictures={project.pictures} fullsizePictures={project.fullSizePictures} /> -->
</div>

<style>
	.container {
		padding-top: var(--menu-height);
		display: flex;
		flex-direction: column;
		gap: 4rem;
		max-width: 130rem;
		margin: 4rem auto;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	main {
		white-space: pre-wrap;
		max-width: 90rem;
	}

	.content > :global(p) {
		font: var(--font-body-huge);
	}

	.container :global(.blog-image) {
		display: block;
		max-width: 720px;
		margin: auto;
	}
	@media (max-width: 800px) {
		.container :global(.blog-image) {
			max-width: 500px;
		}
	}
	@media (max-width: 500px) {
		.container :global(.blog-image) {
			max-width: none;
			width: 90%;
		}
	}
</style>
