<script lang="ts">
	import { onMount } from 'svelte';
	import Sidebar from './sidebar.svelte';
	import { NAV_LINKS } from '$lib/scripts/constants';
	import Hamburger from '$lib/svgs/hamburger.svg?component';
	import Close from '$lib/svgs/close.svg?component';
	import Phone from '$lib/svgs/phone.svg?component';
	import Search from '$lib/svgs/search.svg?component';
	import logo from '$lib/images/logo.png';
	import { pagefind } from '$lib/store';
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	let sidebarOpen = false,
		hiddenNavbar = false,
		oldScrollY: number = 0,
		scrollY: number,
		searching = false,
		searchValue = '';

	$: {
		hiddenNavbar = oldScrollY - scrollY < 0;
		if (hiddenNavbar) {
			searching = false;
		}
		oldScrollY = scrollY;
	}

	function handleSearch() {
		if (hiddenNavbar) {
			return;
		}
		if (searching) {
			goto(`/search?q=${searchValue}`);
			searchValue = '';
			searching = false;
			return;
		}
		searching = true;
	}

	onMount(() => {
		const mql = window.matchMedia('(max-width: 1024px)');
		mql.onchange = (e) => {
			if (!e.matches) {
				sidebarOpen = false;
			}
		};
		window.setPageFind = (value) => {
			pagefind.set(value);
		};
	});
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<script>
		document.addEventListener(
			'DOMContentLoaded',
			() => {
				const loadPageFind = async () => {
					const pagefind = await import('/pagefind/pagefind.js');
					window.setPageFind(pagefind);
				};

				const button = document.getElementById('search');
				button.addEventListener('click', loadPageFind, { once: true });
			},
			{ once: true }
		);
	</script>
</svelte:head>

<div class="navContainer" class:hidden={hiddenNavbar} class:glass={scrollY > 10}>
	<div class="preNav body">
		<span>Arhitectură și Design interior</span>
		•
		<span>Str. dr Mihail Mirinescu, nr 9, București</span>
		•
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
			<form class="searchContainer" on:submit|preventDefault>
				{#if searching}
					<!-- svelte-ignore a11y-autofocus -->
					<input bind:value={searchValue} autofocus type="search" placeholder="Căutare" />
				{/if}
				<button id="search" aria-label="Search" on:click={handleSearch}>
					<Search
						class="searchIcon"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						color="var(--text-light-color)"
					/>
				</button>
			</form>
		</span>

		<a class="link contactLink" href="tel:0742081533" aria-label="Call mobile number 0742 081 533">
			<Phone />0742 081 533
		</a>
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
	.nav.searching {
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

	.searchContainer {
		display: inline-flex;
		align-items: center;
		gap: 2rem;
		justify-self: end;
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

	@media only screen and (max-width: 1366px) {
		.nav {
			grid-template-columns: 15% 1fr 15%;
		}
	}

	@media only screen and (max-width: 1024px) {
		.link:not(.logo) {
			display: none;
		}
	}
</style>
