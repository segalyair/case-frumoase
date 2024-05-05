<script lang="ts">
	import { onMount } from 'svelte';
	import { NAV_LINKS } from '$lib/scripts/constants';
	import Hamburger from '$lib/svgs/hamburger.svg?component';
	import Phone from '$lib/svgs/phone.svg?component';
	import logo from '$lib/images/logo.png';
	import MobileMenu from './mobileMenu.svelte';
	import Search from '../ui/search.svelte';

	let sidebarOpen = false,
		hiddenNavbar = false,
		oldScrollY: number = 0,
		scrollY: number,
		searching: boolean = false,
		showMobileMenu: boolean = false;

	$: {
		hiddenNavbar = oldScrollY - scrollY < 0;
		if (hiddenNavbar) {
			searching = false;
		}
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
	<div class="preNav body">
		<span>Arhitectură și Design interior</span>
		<span class="dot">•</span>
		<span>Str. dr Mihail Mirinescu, nr 9, București</span>
		<span class="dot">•</span>
		<span>adrianpaun@case-frumoase.ro</span>
	</div>
	<nav class="nav" class:scroll={scrollY !== 0} class:sidebarOpen class:searching>
		<a
			class="logo"
			href="/"
			aria-label="Spre pagina principala"
			style={`background: url('${logo}')`}
		>
		</a>
		<span class="links">
			{#each NAV_LINKS as link, i}
				<a class="link" href={link.href}>
					{link.label}
				</a>
			{/each}
			<Search bind:searching />
		</span>

		<a class="link contactLink" href="tel:0742081533" aria-label="Call mobile number 0742 081 533">
			<Phone />0742 081 533
		</a>

		<button class="mobileMenuButton" type="button" on:click={() => (showMobileMenu = true)}>
			<Hamburger />
		</button>
	</nav>
</div>
<MobileMenu bind:show={showMobileMenu} />

<style>
	.navContainer {
		background-color: var(--background-semi-transparent);
		height: var(--menu-height);
		color: var(--text-light-color);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
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
		grid-template-columns: 300px 1fr 300px;
		border-style: solid;
		border-color: var(--border-navbar);
		border-width: 1px 0;
	}
	.logo {
		width: 13.9rem;
		height: 12rem;
		margin: auto;
	}

	.links {
		display: grid;
		grid-template-columns: repeat(4, 15rem) auto;
		width: 100%;
		align-items: center;
		justify-items: center;
		border-left: 1px solid var(--border-navbar);
		padding-right: 4rem;
	}
	.link {
		width: 100%;
		height: 100%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.links > :global(search) {
		margin-left: auto;
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

	.mobileMenuButton {
		display: none;
		margin: auto;
	}

	@media only screen and (max-width: 1500px) {
		.nav {
			grid-template-columns: 200px 1fr 200px;
		}
		.links {
			grid-template-columns: repeat(4, 12.5rem) auto;
		}
	}

	@media only screen and (max-width: 1200px) {
		.nav {
			grid-template-columns: 175px 1fr 175px;
		}
		.links {
			grid-template-columns: repeat(4, 10rem) auto;
			padding-right: 2rem;
		}
	}

	@media only screen and (max-width: 1000px) {
		.links {
			grid-template-columns: 1fr;
		}
		.link:not(.logo, search) {
			display: none;
		}
		.mobileMenuButton {
			display: initial;
		}
	}

	@media only screen and (max-width: 650px) {
		.navContainer {
			height: auto;
		}
		.nav {
			grid-template-columns: 150px 1fr 100px;
		}
		.preNav {
			display: none;
		}
		.links {
			padding-right: 0;
		}
	}

	@media only screen and (max-width: 515px) {
		.links > :global(search) {
			display: none;
		}
		.links {
			border: none;
		}
	}
</style>
