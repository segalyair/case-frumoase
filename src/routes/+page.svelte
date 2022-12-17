<script lang="ts">
	import slide0 from '@images/slides/slide0.jpg?w=1280;1024;480&webp&quality=100&srcset&imagetools';
	import slide1 from '@images/slides/slide1.jpg?w=1280;1024;480&webp&quality=100&srcset&imagetools';
	import slide2 from '@images/slides/slide2.jpg?w=1280;1024;480&webp&quality=100&srcset&imagetools';
	import Carousel from '$lib/components/ui/carousel/carousel.svelte';
	import Preload from '$lib/components/head/preload.svelte';
	// /** @type {import('./$types').PageData} */
	// export let data: any = {};
</script>

<svelte:head>
	<Preload
		imagesrcset={slide0}
		imagesizes={'(max-width: 480px) 480px, (max-width: 768px) 1024px, 1280px'}
	/>
	<Preload
		imagesrcset={slide1}
		imagesizes={'(max-width: 480px) 480px, (max-width: 768px) 1024px, 1280px'}
	/>
	<Preload
		imagesrcset={slide2}
		imagesizes={'(max-width: 480px) 480px, (max-width: 768px) 1024px, 1280px'}
	/>
</svelte:head>

<main>
	<Carousel
		images={[slide0, slide1, slide2]}
		sizes={'(max-width: 480px) 480px, (max-width: 768px) 1024px, 1280px'}
		width={480}
		height={270}
	/>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
		gap: 2rem;
		margin: auto;
	}
</style>
