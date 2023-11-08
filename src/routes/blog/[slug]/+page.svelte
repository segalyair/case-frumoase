<script lang="ts">
	import PictureBuilder from '$lib/components/ui/picture-builder.svelte';
	import type { BlogArticle } from '@customTypes/blogArticle';

	export let data: BlogArticle;
</script>

<header>
	<PictureBuilder class="headerImage" picture={data.thumbnailPicture} />
	<h2 class="h2">{data.title}</h2>
</header>
<main class="body--vlarge">
	{@html data.content}
</main>

<style>
	header {
		text-align: center;
	}
	header :global(.headerImage) {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
	header h2 {
		max-width: 130rem;
		margin: 4rem auto;
	}
	main {
		white-space: pre-wrap;
		max-width: 90rem;
		margin: auto;
		margin-bottom: 4rem;
	}
	main h2{
		margin: 4rem 0;
		text-align: center;
	}
</style>
