<script lang="ts">
	// import Picture from '$lib/components/ui/picture.svelte';
	// import ImageList from '$lib/components/ui/project/image-list.svelte';
	// import type { BlogPost } from '@customTypes/blogpost';

	// export let data: BlogPost;
</script>

<header>
	<!-- <Picture class="headerImage" picture={data.headerImage} sizes="100vw" />
	<h2 class="h2">{data.title}</h2> -->
</header>
<main class="body--vlarge">
	<!-- {@html data.content}
	<h3 class="h3">Poze</h3>
	<ImageList pictureGroup={data.images} fullImageGroup={data.fullImages} /> -->
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
		max-width: 130rem;
		margin: auto;
		margin-bottom: 4rem;
	}
	main h3{
		margin: 4rem 0;
		text-align: center;
	}
</style>
