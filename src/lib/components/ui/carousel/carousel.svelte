<script lang="ts">
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
					<img class="embla__slide__img" alt="Slide" {width} {height} srcset={image} {sizes} />
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

	.embla__slide__img {
		display: block;
		width: 100%;
		object-fit: cover;
	}

	.caption {
		position: absolute;
		top: 4rem;
		left: var(--content-padding);
		padding: 1rem 2rem;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		text-align: center;
	}

	@media only screen and (max-width: 1280px) {
		.embla__slide {
			flex: 0 0 90vw;
		}
	}

	@media only screen and (max-width: 560px) {
		.embla__slide__img {
			max-height: 30rem;
		}
		.caption {
			text-align: left;
			font-size: 2.4rem;
			left: 2rem;
			top: 2rem;
			padding: 0.75rem;
		}
	}

	@media only screen and (max-width: 480px) {
		.embla__container {
			margin: 0;
		}
		.embla__slide {
			flex: 0 0 100vw;
			padding: 0;
		}
	}
</style>
