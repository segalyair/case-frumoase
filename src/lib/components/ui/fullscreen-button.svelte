<script lang="ts">
	import { onMount } from 'svelte';
	import Search from '$lib/svgs/search.svg?component';

	let scrollPosition: number;
	let fullscreenImage: HTMLImageElement | null | undefined = undefined;

	function getFullscreenElement() {
		return (
			document.fullscreenElement ??
			document.webkitFullscreenElement ??
			document.mozFullScreenElement ??
			document.msFullscreenElement
		);
	}

	async function requestFullscreen(
		element: HTMLImageElement,
		options: FullscreenOptions | undefined
	) {
		//@ts-ignore
		if (element.requestFullscreen) {
			element.requestFullscreen(options);
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen(options);
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen(options);
		} else {
			element.msRequestFullscreen?.(options);
		}
	}

	async function setFullscreenImage(e: MouseEvent) {
		if (getFullscreenElement()) {
			return;
		}
		const button = e.target as HTMLButtonElement;
		fullscreenImage = button.firstElementChild?.querySelector('img');
		if (fullscreenImage) {
			scrollPosition = window.scrollY;
			fullscreenImage.style.display = 'initial';
			await requestFullscreen(fullscreenImage, { navigationUI: 'show' });
		}
	}

	function removeFullscreenImage() {
		if (!getFullscreenElement() && fullscreenImage) {
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

<button type="button" on:click={setFullscreenImage}>
	<slot />
	<Search
		class="searchIcon"
		width="48"
		height="48"
		viewBox="0 0 24 24"
		color="var(--text-light-color)"
	/>
</button>

<style>
	button {
		position: absolute;
		top: 2rem;
		right: 2rem;
        padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--background-semi-transparent);
		transition: background-color 200ms;
	}
    button:hover{
        background-color: var(--primary-color);
    }

	button :global(.fullImage) {
		display: none;
        cursor: default;
	}
	button :global(.searchIcon) {
        pointer-events: none;
		user-select: none;
	}
</style>
