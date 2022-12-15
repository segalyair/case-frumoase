<script lang="ts">
	import Picture from '$lib/components/ui/picture.svelte';
	import EmblaCarousel from 'embla-carousel';
	import type { EmblaCarouselType } from 'embla-carousel/components';
	import type { EmblaOptionsType } from 'embla-carousel/components/Options';
	import Autoplay from 'embla-carousel-autoplay';
	import type { AutoplayType } from 'embla-carousel-autoplay';

	export let images: string[] = [];
	let embla: EmblaCarouselType;
	let autoplay: AutoplayType;
	let currentSlide: number = 0;

	function scrollTo(index: number) {
		autoplay.reset();
		embla.scrollTo(index);
		currentSlide = index;
	}

	function onSelect() {
		const slidesTo = embla.slidesInView(true)[0];
		currentSlide = slidesTo >= images.length ? 0 : slidesTo;
	}

	function emblaCarousel(node: HTMLElement, options: EmblaOptionsType) {
		autoplay = Autoplay({ delay: 6000 });
		embla = EmblaCarousel(node, options, [autoplay]);
		embla.on('select', onSelect);
		return {
			destroy: embla.destroy
		};
	}
</script>

<div class="embla">
	<div use:emblaCarousel={{ loop: true }} class="embla__viewport">
		<div class="embla__container">
			{#each images as image, i}
				<div class="embla__slide">
					<Picture
						className="embla__slide__img"
						srcset={image}
						alt="Slide"
						sizes="(max-width: 768px) 1024px, 1280px"
						borderRadius="8px"
						loading={i > 0 ? 'lazy' : undefined}
					/>
				</div>
			{/each}
		</div>
	</div>
	<div class="pagination">
		{#each images as _, i}
			<button
				on:click={() => scrollTo(i)}
				class="pageButton"
				class:active={currentSlide === i}
				aria-label={`Go to slide number ${i + 1}`}
			/>
		{/each}
	</div>
	<div class="caption">
		<h1 class="h3">Case în stil neoromânesc</h1>
		<p class="body body--large">Realizăm proiecte de case în stil românesc!</p>
	</div>
</div>

<style>
	.embla {
		position: relative;
		--slide-spacing: 1rem;
		--slide-size: 100%;
		--slide-height: 78rem;
		border-radius: 12px;
	}
	.embla__viewport {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
		flex-direction: row;
		height: auto;
		margin-left: calc(var(--slide-spacing) * -1);
	}
	.embla__slide {
		flex: 0 0 var(--slide-size);
		min-width: 0;
		padding-left: var(--slide-spacing);
		position: relative;
	}
	.embla__slide :global(.embla__slide__img) {
		height: var(--slide-height);
		width: 100%;
	}

	.pagination {
		position: absolute;
		bottom: 4rem;
		left: 4rem;
		display: flex;
		gap: 2rem;
		background: rgba(255, 255, 255, 0.7);
		padding: 1rem;
		border-radius: 30px;
	}

	.pageButton {
		position: relative;
		width: 1.5rem;
		height: 1.5rem;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 50%;
		margin: 0;
		transition: background 200ms;
	}
	.pageButton:not(.active):hover {
		background: rgba(0, 0, 0, 0.6);
	}
	.pageButton.active {
		background: black;
	}
	.pageButton:before {
		content: '';
		position: absolute;
		top: -1.25rem;
		left: -0.75rem;
		width: 3rem;
		height: 4rem;
	}
	.pagination {
		margin: auto;
	}
	.caption {
		position: absolute;
		top: 4rem;
		left: 4rem;
		padding: 2rem;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
