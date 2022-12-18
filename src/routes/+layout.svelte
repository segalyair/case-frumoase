<script lang="ts">
	import CookiesBanner from '$lib/components/layout/cookies-banner.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Menu from '$lib/components/layout/menu.svelte';
	import Seo from '$lib/components/head/seo.svelte';
	import '../styles/styles.css';
</script>

<Seo
	title="Proiecte Arhitectura Case Frumoase Bucuresti Stil Neoromanesc"
	description="Case-Frumoase.ro iti ofera proiecte de case în diferite stiluri arhitecturale realizate in functie de cerintele fiecarui client in parte. Experienta de peste 15 ani."
/>

<div class="layoutContainer">
	<div class="layout">
		<Menu />
		<slot />
	</div>
	<!-- <CookiesBanner /> -->
	<!-- <Footer /> -->
</div>

<style>
	.layout {
		max-width: var(--content-max-width);
		padding-top: var(--header-height);
		margin: auto;
	}
</style>
