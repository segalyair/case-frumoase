<script lang="ts">
	import type { PictureGroup } from 'src/types/picture';
	import Picture from '../picture.svelte';
	import Carousel from './carousel.svelte';
	export let pictureGroup: PictureGroup;
</script>

<Carousel
	active={pictureGroup.pictures.length > 0}
	slideCount={pictureGroup.pictures.length}
	options={{
		loop: true,
		align: 'center',
		draggable: true
	}}
	autoplayOptions={{ active: false }}
>
	<div slot="slides" class="embla__container">
		{#each pictureGroup.pictures as picture, i}
			<div class="embla__slide">
				<Picture
					class="embla__slide__img"
					sizes={pictureGroup.sizes}
					{picture}
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

	.embla__container :global(.embla__slide__img) {
		display: block;
		object-fit: contain;
		width: 65rem;
	}
</style>
