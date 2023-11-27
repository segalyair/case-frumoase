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
		} catch (err) {
			console.error(err);
			//TO DO: Why is this throwing an error locally?
		}
	});
</script>

<div class="container">
	<header data-pagefind-body>
		<h1 class="h1">
			{project.name}
		</h1>
		<Breadcrumbs />
	</header>
	<main class="body--vlarge" data-pagefind-body>
		<ThumbnailCarousel
			pictures={project.pictures}
			fullsizePictures={project.fullSizePictures ?? []}
			thumbnails={project.paginationPictures ?? []}
		/>

		<div
			class="content"
			id={project.slug}
			data-thumbnail={JSON.stringify(project.pictures[0])}
			data-pagefind-index-attrs="id"
			data-pagefind-meta="thumbnail[data-thumbnail]"
		>
			{@html project.content}
			<span style="display: none;" data-pagefind-weight="10">
				{project.types.map((t) => `${t.projectTypes_id.type} ${t.projectTypes_id.label} `)}
			</span>
		</div>

		<div
			id="cusdis_thread"
			data-host="https://case-frumoase-comments-kxxoe1hx1-segalyair.vercel.app"
			data-app-id="58968d46-abc8-44d6-b381-b9e6fa36dfce"
			data-page-id={project.slug}
			data-page-url={$page.url}
			data-page-title={project.name}
			data-pagefind-ignore
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
