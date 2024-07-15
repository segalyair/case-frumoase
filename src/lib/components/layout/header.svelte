<script>
	import Breadcrumbs from '../ui/breadcrumbs.svelte';
	export let title;
</script>

<header>
	<h1 class="h2">{title}</h1>
	<Breadcrumbs />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: var(--menu-height);
		margin: 4rem var(--content-margins) 4rem;
	}
	@media (max-width: 768px) {
		header {
			display: flex;
			flex-direction: column;
			gap: 2rem;
			text-align: center;
			margin-top: 0;
		}
	}
</style>
