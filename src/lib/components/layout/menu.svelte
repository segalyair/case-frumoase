<script lang="ts">
	import { onMount } from 'svelte';
	import Sidebar from './sidebar.svelte';
	import { NAV_LINKS } from '$lib/scripts/constants';
	import Hamburger from '$lib/svgs/hamburger.svg?component';
	import Close from '$lib/svgs/close.svg?component';
	import Phone from '$lib/svgs/phone.svg?component';
	import logo from '$lib/images/logo.png';

	let sidebarOpen = false,
		hiddenNavbar = false;
	let oldScrollY: number = 0,
		scrollY: number;

	$: {
		hiddenNavbar = oldScrollY - scrollY < 0;
		oldScrollY = scrollY;
	}

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

<div class="navContainer" class:hidden={hiddenNavbar} class:glass={scrollY > 10}>
	<div class="preNav">
		<span class="body body--medium">Arhitectură și Design interior</span>
		<span class="body">•</span>
		<span class="body body--medium">Str. dr Mihail Mirinescu, nr 9, București</span>
		<span class="body">•</span>
		<span class="body body--medium">adrianpaun@case-frumoase.ro</span>
	</div>
	<nav class="nav" class:scroll={scrollY !== 0} class:sidebarOpen>
		<a href="/" aria-label="Spre pagina principala">
			<img width="139" src={logo} alt="Logo case frumoase" />
		</a>
		<span class="links">
			{#each NAV_LINKS as link, i}
				<a class="link" href={link.href}>
					{link.label}
				</a>
			{/each}
		</span>
		<a class="link contactLink" href="tel:0742081533" aria-label="Call mobile number 0742 081 533">
			<Phone />0742 081 533
		</a>
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
	</nav>
</div>

<style>
	.navContainer {
		background-color: var(--background-semi-transparent);
		height: var(--menu-height);
		color: var(--text-light-color);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		transition: top 300ms;
	}
	.navContainer.hidden {
		top: calc(var(--menu-height) * -1);
	}
	.preNav {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		padding: 1rem;
	}
	.nav {
		width: 100vw;
		display: grid;
		justify-items: start;
		grid-template-columns: 20% 1fr 20%;
		border-style: solid;
		border-color: var(--border-navbar);
		border-width: 1px 0;
	}
	.nav a:first-child {
		margin: auto;
	}

	.links {
		display: flex;
		height: 100%;
		align-items: center;
		gap: 7.5rem;
		padding-left: 15rem;
		border-left: 1px solid var(--border-navbar);
	}

	.contactLink {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		background: var(--primary-color);
		width: 100%;
		height: 100%;
	}

	.hamburger {
		color: #8d5530;
		display: none;
	}
	.close {
		color: #8d5530;
	}
	@media only screen and (max-width: 1024px) {
		.link:not(.logo) {
			display: none;
		}
		.hamburger {
			display: initial;
		}
	}
</style>
