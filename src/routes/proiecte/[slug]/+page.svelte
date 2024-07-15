<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/layout/header.svelte';
	import RelatedContent from '$lib/components/section/related-content.svelte';
	import ThumbnailCarousel from '$lib/components/ui/carousel/thumbnail-carousel.svelte';
	import type { BlogArticle } from '@customTypes/blogArticle';
	import type { Project } from '@customTypes/project';
	import { onMount } from 'svelte';

	export let data: {
		project: Project;
		relatedContent: { projects: Project[]; blogArticles: BlogArticle[] };
	};
	const { project, relatedContent } = data;
	onMount(() => {
		try {
			window.CUSDIS.initial();
		} catch (err) {
			console.error(err);
		}
	});
</script>

<Header title={project.name} />
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

	<RelatedContent projects={relatedContent.projects} blogArticles={relatedContent.blogArticles} />

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

<style>
	main {
		white-space: pre-wrap;
		margin: 0 var(--content-margins) 0;
	}

	main > :global(.embla) {
		height: auto;
	}

	.content {
		max-width: 90rem;
		margin: auto;
	}
	.content > :global(p) {
		font: var(--font-body-huge);
	}

	:global(.blog-image) {
		display: block;
		max-width: 720px;
		margin: auto;
	}

	@media (max-width: 800px) {
		:global(.blog-image) {
			max-width: 500px;
		}
	}
	@media (max-width: 500px) {
		:global(.blog-image) {
			max-width: none;
			width: 90%;
		}
	}
</style>
