<script lang="ts">
	import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
	import type { EmblaOptionsType } from 'embla-carousel/components/Options';
	import Autoplay from 'embla-carousel-autoplay';
	import type { AutoplayType } from 'embla-carousel-autoplay';
	import { onMount, onDestroy } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import type { OptionsType } from 'embla-carousel-autoplay/components/Options';
	import Pagination from './pagination.svelte';

	export let options: EmblaOptionsType = {
		loop: true,
		align: 'center'
	};
	export let autoplayOptions: Partial<OptionsType> = {
		delay: 6000
	};
	export let slideCount: number = 0;
	export let active: boolean = true;
	export let currentSlide: number = 0;

	const dispatch = createEventDispatcher();
	let embla: EmblaCarouselType;
	let autoplay: AutoplayType;
	let initialized = false;

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
			if (slideCount) {
				onSelect();
			}
		});
		if (slideCount) {
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
		{#if initialized}
			<slot name="caption" />
			<Pagination items={slideCount} {scrollTo} currentItem={currentSlide} />
		{/if}
	</div>
{/if}

<style>
	.embla {
		visibility: hidden;
		position: relative;
	}
	.embla__viewport {
		overflow: hidden;
	}
	.initialized {
		visibility: initial;
	}
</style>
