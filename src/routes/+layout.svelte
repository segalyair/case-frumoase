<script lang="ts">
	import CookiesBanner from '$lib/components/layout/cookies-banner.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Menu from '$lib/components/layout/menu.svelte';
	import Picture from '$lib/components/ui/picture.svelte';
	import '../styles/styles.css';
</script>

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
		padding-top: 10rem;
		margin: auto;
	}
	/*var(--phone-sm)*/
	@media only screen and (max-width: 576px) {
		.layout {
			padding-top: 15rem;
		}
	}
</style>
