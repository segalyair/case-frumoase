<script lang="ts">
	import type { Picture } from '@customTypes/picture';
	import PictureBuilder from '../picture-builder.svelte';
	import { onMount } from 'svelte';

	export let items: Picture[] = [],
		currentItem = 0,
		scrollTo: (index: number) => void;
	let buttons: HTMLButtonElement[] = [],
		pagination: HTMLDivElement,
		previousItem = currentItem,
		isDrag = false;
	$: {
		if (currentItem !== previousItem) {
			isDrag === false &&
				buttons[currentItem].scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
					inline: 'center'
				});
			previousItem = currentItem;
		}
	}
	onMount(() => {
		dragThumbnail();
	});

	function dragThumbnail() {
		const toggleDrag = () => (isDrag = !isDrag);

		pagination.addEventListener('pointerdown', toggleDrag);
		pagination.addEventListener('pointerup', toggleDrag);
		pagination.addEventListener('pointermove', (e: PointerEvent) => {
			e.stopPropagation();
			if (!isDrag) return;
			isDrag && (pagination.scrollLeft -= e.movementX);
		});
	}
</script>

<div bind:this={pagination} class="pagination">
	{#each items as item, i}
		<button
			bind:this={buttons[i]}
			on:click|preventDefault={() => scrollTo(i)}
			class:active={currentItem === i}
			aria-label={`Go to thumbnail number ${i + 1}`}
		>
			<PictureBuilder class="thumbnail" picture={item} />
		</button>
	{/each}
</div>

<style>
	.pagination {
		--thumbnail-size: 10rem;
		width: 100%;
		display: flex;
		gap: 2rem;
		padding: 2rem;
		overflow-y: auto;
	}

	button {
		position: relative;
		width: var(--thumbnail-size);
		height: var(--thumbnail-size);
		user-select: none;
	}
	button::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	button:not(.active)::after {
		background-color: rgba(0, 0, 0, 0.4);
		transition: background-color 200ms;
	}
	button:not(.active):hover::after {
		background-color: rgba(0, 0, 0, 0.1);
		border: 3px solid var(--primary-color);
	}
	button.active::after {
		background: none;
		border: 3px solid var(--primary-color);
	}
	button :global(.thumbnail) {
		width: var(--thumbnail-size);
		height: var(--thumbnail-size);
		object-fit: cover;
	}
</style>
