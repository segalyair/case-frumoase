<script lang="ts">
	// import LoginDialog from '../ui/dialog/login-dialog.svelte';
	import { NAV_LINKS } from '$lib/scripts/constants';
	import Hamburger from '$lib/svgs/hamburger.svg?component';
	import { onMount } from 'svelte';

	let sidebarOpen = false;
	// let loginModal: HTMLDialogElement;
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
		<button class="hamburger" aria-label="Open sidebar">
			<Hamburger />
		</button>
	</div>
</nav>

<!-- <LoginDialog bind:modal={loginModal} /> -->
<style>
	.nav {
		width: 100%;
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

	.logo {
		font-family: Courgette;
		font-size: 5rem;
		line-height: 1.5;
		color: var(--primary-color);
		text-shadow: 1px 1px 2px lightgray;
		width: fit-content;
	}
	@media only screen and (max-width: 1024px) {
		.content {
			grid-template-columns: 1fr auto;
		}
		.logo {
			font-size: 4rem;
			line-height: 1.2;
		}
		.link:not(.logo) {
			display: none;
		}
		.hamburger {
			display: initial;
		}
	}
</style>
