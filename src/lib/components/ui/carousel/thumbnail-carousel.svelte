<script lang="ts">
	import type { Picture } from '@customTypes/picture';
	import PictureBuilder from '../picture-builder.svelte';
	import Carousel from './carousel.svelte';
	export let pictures: Picture[];
</script>

<Carousel
	active={pictures.length > 0}
	slideCount={pictures.length}
	options={{
		loop: true,
		align: 'center',
		dragFree: false
	}}
	autoplayOptions={{ active: false }}
>
	<div slot="slides" class="embla__container">
		{#each pictures as picture, i}
			<div class="embla__slide">
				<PictureBuilder class="embla__slide__img" {picture} loading={i > 0 ? 'lazy' : undefined} />
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

	.embla__container :global(.embla__slide__img) {
		display: block;
		object-fit: contain;
		width: 65rem;
	}
</style>
