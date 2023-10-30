<script lang="ts">
	import Search from '$lib/svgs/search.svg?component';
	import { onMount } from 'svelte';
	import PictureBuilder from '../picture-builder.svelte';
	import type { Picture } from '@customTypes/picture';

	export let pictures: Picture[];

	let scrollPosition: number;
	let fullscreenImage: HTMLImageElement | null | undefined = undefined;

	async function setFullscreenImage(e: MouseEvent) {
		if (document.fullscreenElement) {
			return;
		}
		const button = e.target as HTMLButtonElement;
		fullscreenImage = button.firstElementChild?.querySelector('img');
		if (fullscreenImage) {
			scrollPosition = window.scrollY;
			fullscreenImage.style.display = 'initial';
			await fullscreenImage.requestFullscreen({ navigationUI: 'show' });
		}
	}

	function removeFullscreenImage() {
		if (!document.fullscreenElement && fullscreenImage) {
			fullscreenImage.style.display = 'none';
			window.scrollTo({ top: scrollPosition });
		}
	}

	onMount(() => {
		addEventListener('fullscreenchange', removeFullscreenImage);
		return () => {
			removeEventListener('fullscreenchange', removeFullscreenImage);
		};
	});
</script>

<div class="list">
	{#each pictures as picture, i}
		<button type="button" on:click={setFullscreenImage}>
			{#if pictures.length > 0}
				<PictureBuilder
					class="fullImage"
					sizes={picture.sizes}
					picture={pictures[i]}
					loading={'lazy'}
				/>
			{/if}
			<PictureBuilder class="thumbnail" sizes={picture.sizes} {picture} loading={'lazy'} />
			<Search
				class="searchIcon"
				width="48"
				height="48"
				viewBox="0 0 24 24"
				color="var(--text-light-color)"
			/>
		</button>
	{/each}
</div>

<style>
	button {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: fit-content;
	}

	button :global(.thumbnail) {
		max-width: 65rem;
		height: 36.6rem;
	}

	button :global(.fullImage) {
		display: none;
	}

	button :global(.searchIcon) {
		position: absolute;
		transition: all 200ms;
		opacity: 0;
	}

	button::before {
		content: '';
		position: absolute;
		background-color: var(--background-semi-transparent);
		width: 100%;
		height: 100%;
		transition: all 200ms;
		opacity: 0;
	}

	button:hover::before {
		opacity: 1;
	}
	button:hover :global(.searchIcon) {
		opacity: 1;
	}
</style>
