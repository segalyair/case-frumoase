<script lang="ts">
	import Logo from '$lib/svgs/logo.svg?component';
	import Hamburger from '$lib/svgs/hamburger.svg?component';
	import Close from '$lib/svgs/close.svg?component';
	import PolygonUser from '$lib/svgs/polygon-user.svg?component';
	import LanguageSelect from '../ui/header/language-select.svelte';
	import Sidebar from './sidebar.svelte';
	import { MAIN_NAV_LINKS, NAV_LINKS } from '../../scripts/constants.js';
	import LoginDialog from '../ui/dialog/login-dialog.svelte';
	import TotalBoosters from '../ui/header/total-boosters.svelte';
	import ConfigurableLink from '../ui/header/configurable-link.svelte';
	import { onMount } from 'svelte';
	import Picture from '../ui/picture.svelte';

	let sidebarOpen = false;
	let loginModal: HTMLDialogElement;
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
	<a href="/" class="logo">Case Frumoase</a>
	<a href="/" class="link">Proiecte</a>
	<a href="/" class="link">Servicii</a>
	<a href="/" class="link">Blog</a>
	<a href="/" class="link">Contact</a>
</nav>
<LoginDialog bind:modal={loginModal} />

<style>
	.nav {
		width: 100%;
		max-width: 128rem;
		position: fixed;
		top: 0;
		z-index: 1;
		padding: 2rem 0;
		background-color: var(--text-light-color);
		display: grid;
		grid-template-columns: 1fr auto auto auto auto;
		align-items: center;
		column-gap: 4rem;
	}

	/* on scroll styling */
	.nav.scroll {
		background-color: rgba(0, 0, 0, 0.1);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		transition: background-color 200ms;
	}

	.logo {
		font-family: Courgette;
		font-size: 4rem;
		color: var(--primary-color);
		text-shadow: 1px 1px 2px lightgray;
	}

	.nav.scroll .totalBoosters,
	.nav.scroll .topLinks,
	.nav.scroll .menuLanguageSelect {
		display: none;
	}

	.nav.sidebarOpen {
		background: #151515;
	}

	.topLinks {
		display: flex;
		gap: 4rem;
		justify-self: end;
		grid-column: 2/4;
	}

	.menuLanguageSelect {
		justify-self: end;
	}

	.hamburger {
		display: none;
	}

	.bottomLinks {
		display: flex;
		gap: 5.5rem;
	}
	.membersArea {
		grid-column: 3/5;
	}

	.nav :global(.dropdown > *:last-child) {
		color: var(--text-secondary);
	}

	/*var(--laptop)*/
	@media only screen and (max-width: 1440px) {
		.nav {
			grid-template-columns: auto auto 1fr auto 42px;
			column-gap: 6rem;
		}

		.nav.scroll {
			grid-template-rows: 1fr 1fr;
		}
		.nav.scroll .totalBoosters,
		.nav.scroll .topLinks,
		.nav.scroll .menuLanguageSelect {
			display: flex;
		}

		.topLinks {
			grid-column: 3/5;
		}

		.bottomLinks {
			grid-column: 1/4;
			gap: 2rem;
		}

		.membersArea {
			grid-column: 4/6;
			gap: 0.5rem;
		}
	}

	/* var(--tablet-lg) */
	@media only screen and (max-width: 1024px) {
		.nav {
			grid-template-columns: auto 1fr auto auto;
			padding-left: 2rem;
			padding-right: 2rem;
			column-gap: 4rem;
		}

		.topLinks {
			display: none !important;
		}

		.menuLanguageSelect {
			display: none !important;
		}

		.close,
		.hamburger {
			display: inline-block;
			grid-column: 4;
		}

		.bottomLinks {
			grid-column: 1/-1;
			justify-self: center;
		}

		.membersArea {
			grid-row: 1;
			grid-column: 3;
			gap: 0.5rem;
		}
	}

	/* var(--phone) */
	@media only screen and (max-width: 768px) {
		.nav {
			height: var(--header-height);
			grid-template-columns: 1fr auto auto;
			grid-template-rows: 1fr !important;
			column-gap: 2rem;
		}

		.nav .totalBoosters {
			display: none !important;
		}

		.bottomLinks {
			display: none;
		}

		.membersArea span {
			display: none;
		}
	}
</style>
