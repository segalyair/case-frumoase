<script lang="ts">
	import { onMount } from 'svelte';
	import Sidebar from './sidebar.svelte';
	import { NAV_LINKS } from '$lib/scripts/constants';
	import Hamburger from '$lib/svgs/hamburger.svg?component';
	import Close from '$lib/svgs/close.svg?component';

	let sidebarOpen = false;
	let scrollY: number;

	onMount(() => {
		const mql = window.matchMedia('(max-width: 1024px)');
		mql.onchange = (e) => {
			if (!e.matches) {
				sidebarOpen = false;
			}
		};
	});
</script>

<svelte:window bind:scrollY />

<nav class="nav" class:scroll={scrollY !== 0} class:sidebarOpen>
	<div class="content">
		{#each NAV_LINKS as LINK, i}
			<a
				href={LINK.href}
				class:logo={i === 0}
				class:link={i > 0}
				class:button={i === NAV_LINKS.length - 1}
			>
				{LINK.label}
			</a>
		{/each}

		{#if sidebarOpen}
			<button
				type="button"
				class="close"
				aria-label="Close sidebar"
				on:click={(e) => {
					sidebarOpen = false;
					e.stopPropagation();
				}}
			>
				<Close />
			</button>
			<Sidebar on:close={() => (sidebarOpen = false)} />
		{:else}
			<button
				type="button"
				class="hamburger"
				on:click={() => (sidebarOpen = true)}
				aria-label="Open sidebar"
			>
				<Hamburger />
			</button>
		{/if}
	</div>
</nav>

<style>
	.nav {
		width: 100vw;
		height: var(--header-height);
		position: fixed;
		top: 0;
		z-index: 1;
		display: flex;
		background-color: var(--text-light-color);
	}

	.hamburger {
		color: #8d5530;
		display: none;
	}
	.close {
		color: #8d5530;
	}
	.content {
		width: 100%;
		max-width: var(--content-max-width);
		display: grid;
		grid-template-columns: 1fr auto auto auto auto;
		align-items: center;
		column-gap: 4rem;
		padding: 0 var(--content-padding);
	}

	/* on scroll styling */
	.nav.scroll {
		/* background-color: rgba(0, 0, 0, 0.1);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		transition: background-color 200ms; */
	}
	@media only screen and (max-width: 1024px) {
		.content {
			grid-template-columns: 1fr auto;
		}
		.link:not(.logo) {
			display: none;
		}
		.hamburger {
			display: initial;
		}
	}
</style>
