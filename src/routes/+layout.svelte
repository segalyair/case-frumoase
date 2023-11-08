<script lang="ts">
	import CookiesBanner from '$lib/components/layout/cookies-banner.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Menu from '$lib/components/layout/menu.svelte';
	import Seo from '$lib/components/head/seo.svelte';
	import ChevronDown from '$lib/svgs/chevron-down.svg?component';
	import '../styles/styles.css';
	import { onMount } from 'svelte';

	export let data;
	let scrollY: number = 0,
		mounted = false;
	// const { articles } = data;
	const articles = [];
	function scrollToTop() {
		if (mounted && scrollY > 0) {
			window.scrollTo({ top: 0 });
		}
	}

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<script type="application/ld+json">
		[
			{
				'@context': 'https://schema.org',
				'@type': 'Organization',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Bucharest, Romania'
				},
				email: 'adrianpaun@case-frumoase.ro',
				member: [
					{
						'@type': 'Person',
						name: 'Adrian Păun'
					}
				],
				name: 'case-frumoase.ro',
				telephone: '0742 081 533'
			}
		];
	</script>
</svelte:head>

<Seo
	title="Proiecte Arhitectură Case Frumoase Stil Neoromânesc"
	description="Case-Frumoase.ro iți oferă proiecte de case în diferite stiluri arhitecturale realizate în funcție de cerințele fiecărui client în parte. Experiență de peste 15 ani."
/>

<div class="layout-container">
	<div class="layout">
		<Menu />
		<slot />
	</div>
	<CookiesBanner />
	<Footer {articles} />
	<button
		class="scroll-to-top"
		class:show={mounted && scrollY > 0}
		on:click={scrollToTop}
		aria-label="Scroll back to the top"
	>
		<ChevronDown width="20" height="20" viewBox="0 0 12 12" />
	</button>
</div>

<style>
	.layout {
		min-height: 100vh;
		max-width: var(--content-max-width);
		margin: auto;
	}

	.scroll-to-top {
		position: fixed;
		display: none;
		align-items: center;
		bottom: 4rem;
		right: 4rem;
		z-index: 1;
		background: white;
		padding: 2rem;
		border-radius: 50%;
		transform: rotate(180deg);
		border: 2px solid var(--text-dark-color);
	}
	.scroll-to-top.show {
		display: flex;
	}
</style>
