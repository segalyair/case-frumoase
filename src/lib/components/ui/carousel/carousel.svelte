<script lang="ts">
	import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import { onMount, onDestroy } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import Pagination from './pagination.svelte';
	import type { EmblaOptionsType } from 'embla-carousel/components/Options';
	import type { AutoplayType } from 'embla-carousel-autoplay';
	import type { OptionsType } from 'embla-carousel-autoplay/components/Options';
	import type { Picture } from '@customTypes/picture';

	const dispatch = createEventDispatcher();

	export let options: EmblaOptionsType = {
			loop: true,
			align: 'center',
			dragFree: false
		},
		autoplayOptions: Partial<OptionsType> = {
			delay: 6000
		},
		slides: Picture[] = [],
		thumbnails: Picture[] = [],
		active: boolean = true,
		currentSlide: number = 0;

	let embla: EmblaCarouselType,
		autoplay: AutoplayType,
		initialized = false;

	function scrollTo(index: number) {
		autoplay.reset();
		embla.scrollTo(index);
		currentSlide = index;
	}

	function onSelect() {
		currentSlide = embla.selectedScrollSnap();
	}

	function emblaCarousel(node: HTMLElement, options: EmblaOptionsType) {
		autoplay = Autoplay(autoplayOptions);
		embla = EmblaCarousel(node, options, [autoplay]);

		embla.on('init', () => {
			initialized = true;
			dispatch('init');
			if (slides) {
				onSelect();
			}
		});
		if (slides) {
			embla.on('scroll', onSelect);
			embla.on('reInit', onSelect);
		}
	}
	onMount(() => {
		if (!active) {
			dispatch('init');
		}
	});
	onDestroy(() => {
		embla?.destroy();
	});
</script>

{#if active}
	<div class="embla" class:initialized>
		<div use:emblaCarousel={options} class="embla__viewport">
			<slot name="slides" />
		</div>
		<Pagination items={thumbnails} {scrollTo} currentItem={currentSlide} />
	</div>
{/if}

<style>
	.embla {
		visibility: hidden;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: start;
		background-color: rgba(0, 0, 0, 0.1);
		/* slide height + pagination height */
		height: calc(50.6rem + 14rem);
	}
	.embla__viewport {
		overflow: hidden;
	}
	.initialized {
		visibility: initial;
	}
</style>
