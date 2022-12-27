<script lang="ts">
	import Carousel from './carousel.svelte';
	export let mainSlides: MainSlides = { sizes: '', slides: [] },
		onInit: () => void;
	const { sizes } = mainSlides;
	function getEntries(slide: any) {
		return Object.entries<string>(slide).filter((s) => s[0] !== 'fallback');
	}
</script>

<Carousel active={mainSlides.slides.length > 0} on:init={onInit}>
	<div slot="slides" class="embla__container">
		{#each mainSlides.slides as slide}
			<div class="embla__slide">
				<picture>
					{#each getEntries(slide) as entry}
						<source srcset={entry[1]} {sizes} type={`image/${entry[0]}`} />
					{/each}
					<img
						class="embla__slide__img"
						width={800}
						height={450}
						src={slide.fallback}
						alt="House slide"
					/>
				</picture>
			</div>
		{/each}
	</div>
	<h1 slot="caption" class="h2 caption">În stil neoromânesc</h1>
</Carousel>

<style>
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
		width: 128rem;
		height: auto;
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
		.embla__slide__img {
			width: auto;
		}
		.embla__slide {
			flex: 0 0 90vw;
		}
	}

	@media only screen and (max-width: 560px) {
		.embla__slide__img {
			max-height: 45rem;
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
