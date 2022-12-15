<script lang="ts">
	import Picture from '$lib/components/ui/picture.svelte';
	import slide0 from '@images/slides/slide0.jpg?w=1280;1024&webp&quality=100&srcset&imagetools';
	import slide1 from '@images/slides/slide1.jpg?w=1280;1024&webp&quality=100&srcset&imagetools';
	import slide2 from '@images/slides/slide2.jpg?w=1280;1024&webp&quality=100&srcset&imagetools';
	import Carousel from '$lib/components/ui/carousel.svelte';
	// /** @type {import('./$types').PageData} */
	// export let data: any = {};
</script>

<main>
	<Carousel images={[slide0, slide1, slide2]} />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		gap: 2rem;
		margin: auto;
		max-width: var(--content-width);
	}
</style>
