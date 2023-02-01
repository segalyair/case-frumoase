<script lang="ts">
	import Carousel from './carousel.svelte';
	export let slides: any[] = [];
</script>

<Carousel
	active={slides.length > 0}
	slideCount={slides.length}
	options={{
		loop: true,
		align: 'center',
		draggable: true
	}}
	autoplayOptions={{ active: false }}
>
	<div slot="slides" class="embla__container">
		{#each slides as slide, i}
			<div class="embla__slide">
				<img
					class="embla__slide__img"
					width={650}
					height={366}
					src={slide}
					alt="Thumbnail slide"
					loading={i > 0 ? 'lazy' : undefined}
				/>
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
	}

	.embla__slide {
		flex: 0 0 auto;
		min-width: 0;
		position: relative;
		cursor: grab;
	}
	.embla__slide:active:hover {
		cursor: grabbing;
	}

	.embla__slide__img {
		display: block;
		object-fit: contain;
	}
</style>
