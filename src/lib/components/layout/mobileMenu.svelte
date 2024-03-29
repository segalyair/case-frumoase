<script lang="ts">
	import { fade } from 'svelte/transition';
	import Close from '$lib/svgs/close.svg?component';
	import { NAV_LINKS } from '$lib/scripts/constants';
	import { onMount } from 'svelte';
	import Search from '../ui/search.svelte';
	import { browser } from '$app/environment';

	export let show: boolean = false;

	$: if (browser) {
		document.body.style.overflow = show ? 'hidden' : 'initial';
	}

	onMount(() => {
		const mql = window.matchMedia('(max-width: 1000px)');
		mql.onchange = (e) => {
			if (!e.matches) {
				show = false;
			}
		};
	});
</script>

{#if show}
	<div class="overlay" transition:fade>
		<button type="button" on:click={() => (show = false)}>
			<Close />
		</button>
		<Search on:search={() => (show = false)} />
		{#each NAV_LINKS as link}
			<a class="h3" href={link.href} on:click={() => (show = false)}>{link.label}</a>
		{/each}
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		z-index: 2;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: grid;
		grid-template-rows: repeat(6, 100px);
		align-items: center;
		justify-items: end;
		text-align: right;
		padding-top: 40px;
		padding-right: 40px;
		background: var(--background-color);
	}
	.overlay :global(svg) {
		color: var(--text-dark-color);
	}
	a {
		height: 100%;
		width: 100px;
		color: var(--text-dark-color);
	}
	.overlay :global(search) {
		display: none;
	}

	@media only screen and (max-height: 600px) {
		.overlay {
			grid-template-columns: min-content min-content;
			justify-content: end;
			column-gap: 8rem;
			row-gap: 2rem;
		}
		.overlay > button {
			grid-column: span 2;
		}
		.overlay :global(search) {
			grid-column: span 2;
		}
	}

	@media only screen and (max-width: 515px) {
		.overlay :global(search) {
			display: initial;
		}
	}
</style>
