<script lang="ts">
	import PictureBuilder from '$lib/components/ui/picture-builder.svelte';
	import type { BlogArticle } from '@customTypes/blogArticle';

	export let data: BlogArticle;
</script>

<header>
	<PictureBuilder class="headerImage" picture={data.thumbnailPicture} />
	<h1 class="h2" data-pagefind-body>{data.title}</h1>
</header>
<main
	class="body--vlarge"
	id={data.slug}
	data-pagefind-body
	data-pagefind-index-attrs="id"
	data-thumbnail={JSON.stringify(data.thumbnailPicture)}
	data-pagefind-meta="thumbnail[data-thumbnail]"
>
	{@html data.content}
</main>

<style>
	header {
		margin-top: calc(var(--menu-height) + 6rem);
		text-align: center;
	}
	header :global(.headerImage) {
		width: 90rem;
		height: 45rem;
		object-fit: cover;
	}
	header h1 {
		max-width: 90rem;
		margin: 4rem auto;
	}
	main {
		white-space: pre-wrap;
		max-width: 90rem;
		margin: auto;
		margin-bottom: 4rem;
	}
</style>
