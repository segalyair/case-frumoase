<script lang="ts">
	import PictureBuilder from '../picture-builder.svelte';
	import FullscreenButton from '../fullscreen-button.svelte';
	import type { Picture } from '@customTypes/picture';

	export let pictures: Picture[], fullsizePictures: Picture[] | undefined;
</script>

<div class="list">
	{#each pictures as picture, i}
		{#if fullsizePictures}
			<FullscreenButton>
				<PictureBuilder
					class="fullImage"
					sizes={fullsizePictures[i].sizes}
					picture={fullsizePictures[i]}
					loading={'lazy'}
				/>
				<PictureBuilder class="thumbnail" sizes={picture.sizes} {picture} loading={'lazy'} />
			</FullscreenButton>
		{:else}
			<PictureBuilder class="thumbnail" sizes={picture.sizes} {picture} loading={'lazy'} />
		{/if}
	{/each}
</div>

<style>
</style>
