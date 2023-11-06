<script lang="ts">
	import { page } from '$app/stores';
	import Breadcrumbs from '$lib/components/ui/breadcrumbs.svelte';
	import ImageList from '$lib/components/ui/project/image-list.svelte';
	import type { Project } from '@customTypes/project';
	import { onMount } from 'svelte';

	export let data: { project: Project };
	const { project } = data;
	let ready = false;

	onMount(() => {
		window.CUSDIS.initial();
		const elements = document.getElementsByTagName('img');
		for (const element of elements) {
			if (element.src.includes('localhost:8')) {
				// Directus appends ? at end of src of image for some wierd reason 
				const id = element.src.split('/').slice(-1)[0].replaceAll('?', ''),
					newSrc = `/image/${id}`;
				element.classList.add('blog-image');
				element.src = `${newSrc}_webp_720/${element.alt}`;
				element.srcset = `${newSrc}_webp_300/${element.alt} 300w, ${newSrc}_webp_500/${element.alt} 500w, ${newSrc}_webp_720/${element.alt} 720w`;
				element.sizes = '(max-width: 500px) 300px, (max-width: 800px) 500px, 720px';
			}
		}
		ready = true;
	});
</script>

<div class="container">
	<header>
		<h1 class="h1">{project.name}</h1>
		<Breadcrumbs />
	</header>
	<main class="body--vlarge" class:show={ready}>
		{@html project.content}
	</main>

	<ImageList pictures={project.pictures} fullsizePictures={project.fullSizePictures} />

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
		display: none;
		white-space: pre-wrap;
		max-width: 92rem;
	}
	main.show {
		display: initial;
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
