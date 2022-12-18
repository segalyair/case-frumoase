<script lang="ts">
	import Picture from '$lib/components/ui/picture.svelte';
	import EmblaCarousel from 'embla-carousel';
	import type { EmblaCarouselType } from 'embla-carousel/components';
	import type { EmblaOptionsType } from 'embla-carousel/components/Options';
	import Autoplay from 'embla-carousel-autoplay';
	import type { AutoplayType } from 'embla-carousel-autoplay';
	import { onDestroy } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let images: string[] = [],
		sizes: string | undefined = undefined,
		width: number | undefined = undefined,
		height: number | undefined = undefined;
	let embla: EmblaCarouselType;
	let autoplay: AutoplayType;
	let initialized = false;
	// let currentSlide: number = 0;

	// function scrollTo(index: number) {
	// 	autoplay.reset();
	// 	embla.scrollTo(index);
	// 	currentSlide = index;
	// }

	// function onSelect() {
	// 	const slidesTo = embla.slidesInView(true)[0];
	// 	currentSlide = slidesTo >= images.length ? 0 : slidesTo;
	// }

	function emblaCarousel(node: HTMLElement, options: EmblaOptionsType) {
		autoplay = Autoplay({ delay: 6000 });
		embla = EmblaCarousel(node, options, [autoplay]);
		embla.on('init', () => {
			//Seldom not all slides are loaded
			if (embla.slidesInView().length < images.length) {
				embla.reInit();
			}
			initialized = true;
			dispatch('init');
		});
	}
	onDestroy(() => {
		embla?.destroy();
	});
</script>

<div class="embla" style={`visibility: ${initialized ? 'initial' : 'hidden'}`}>
	<div
		use:emblaCarousel={{ loop: true, align: 'center', draggable: false, speed: 6 }}
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
	{#if initialized}
		<h1 class="h2 caption">În stil neoromânesc</h1>
	{/if}
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
		margin-left: calc(0.5rem * -1);
	}
	.embla__slide {
		flex: 0 0 auto;
		min-width: 0;
		position: relative;
		padding-left: 0.5rem;
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
		font-weight: 700;
		font-size: 6rem;
		line-height: 1.2;
		text-align: center;
	}

	@media only screen and (max-width: 1280px) {
		.embla__slide {
			flex: 0 0 90%;
		}
	}
</style>
