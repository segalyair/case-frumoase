<script lang="ts">
	import LoginDialog from '../ui/dialog/login-dialog.svelte';
	import { onMount } from 'svelte';

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
	<div class="content">
		<a href="/" class="logo">Case Frumoase</a>
		<a href="/" class="link">Proiecte</a>
		<a href="/" class="link">Servicii</a>
		<a href="/" class="link">Blog</a>
		<a href="/" class="link">Contact</a>
	</div>
</nav>
<LoginDialog bind:modal={loginModal} />

<style>
	.nav {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 1;
		padding: 2rem 0;
		background-color: var(--text-light-color);
	}

	.content {
		max-width: var(--content-width);
		display: grid;
		grid-template-columns: 1fr auto auto auto auto;
		align-items: center;
		column-gap: 4rem;
		margin: auto;
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
		width: fit-content;
	}

	.content > a:last-child {
		background: #8d5530;
		border-radius: 32px;
		color: white;
		padding: 1rem 2rem;
	}
</style>
