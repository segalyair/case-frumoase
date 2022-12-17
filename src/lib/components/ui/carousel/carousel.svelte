<script lang="ts">
	import Picture from '$lib/components/ui/picture.svelte';
	import EmblaCarousel from 'embla-carousel';
	import type { EmblaCarouselType } from 'embla-carousel/components';
	import type { EmblaOptionsType } from 'embla-carousel/components/Options';
	import Autoplay from 'embla-carousel-autoplay';
	import type { AutoplayType } from 'embla-carousel-autoplay';
	import { onDestroy, onMount } from 'svelte';

	export let images: string[] = [],
		sizes: string | undefined = undefined,
		width: number | undefined = undefined,
		height: number | undefined = undefined;
	let embla: EmblaCarouselType;
	let autoplay: AutoplayType;
	let currentSlide: number = 0;

	// function scrollTo(index: number) {
	// 	autoplay.reset();
	// 	embla.scrollTo(index);
	// 	currentSlide = index;
	// }

	function onSelect() {
		const slidesTo = embla.slidesInView(true)[0];
		currentSlide = slidesTo >= images.length ? 0 : slidesTo;
	}

	function emblaCarousel(node: HTMLElement, options: EmblaOptionsType) {
		autoplay = Autoplay({ delay: 6000 });
		embla = EmblaCarousel(node, options, [autoplay]);
		embla.on('select', onSelect);
	}
	onMount(() => {
		embla.reInit();
	});
	onDestroy(() => {
		embla?.destroy();
	});
</script>

<div class="embla">
	<div
		use:emblaCarousel={{ loop: true, align: 'center', draggable: false, speed: 5 }}
		class="embla__viewport"
	>
		<div class="embla__container">
			{#each images as image, i}
				<div class="embla__slide">
					<Picture
						className="embla__slide__img"
						srcset={image}
						{width}
						{height}
						alt="Slide"
						{sizes}
					/>
				</div>
			{/each}
		</div>
	</div>
	<h1 class="h3 caption">În stil neoromânesc</h1>
</div>

<style>
	.embla {
		position: relative;
	}
	.embla__viewport {
		overflow: hidden;
	}
	.embla__container {
		user-select: none;
		display: flex;
		flex-direction: row;
		height: auto;
		margin-left: 1rem;
	}
	.embla__slide {
		flex: 0 0 128rem;
		min-width: 0;
		position: relative;
		padding-left: 1rem;
	}

	.embla__slide > :global(.embla__slide__img) {
		display: block;
		width: 100%;
		object-fit: cover;
	}

	.caption {
		position: absolute;
		top: 4rem;
		left: 8rem;
		padding: 1rem 2rem;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 68px;
		line-height: 82px;
		text-align: center;
		color: #402616;
	}
</style>