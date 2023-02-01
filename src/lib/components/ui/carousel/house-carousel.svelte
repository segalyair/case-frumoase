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
		width: 100vw;
		height: auto;
		max-height: 100vh;
		object-fit: cover;
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
