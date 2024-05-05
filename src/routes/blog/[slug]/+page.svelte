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
		margin: calc(var(--menu-height) + 3rem) auto auto;
		text-align: center;
	}
	header h1 {
		max-width: 80rem;
		margin: 2rem auto 4rem;
	}
	header :global(.headerImage) {
		min-height: 70vh;
	}
	main {
		white-space: pre-wrap;
		max-width: 80rem;
		margin: 0 auto 4rem;
	}

	@media only screen and (max-width: 1000px) {
		header {
			margin-top: calc(var(--menu-height) + 2rem);
		}
		header,
		main {
			margin-left: 2rem;
			margin-right: 2rem;
		}

		header :global(.headerImage) {
			width: 100%;
			min-height: 50vh;
			object-fit: cover;
		}
	}
</style>
