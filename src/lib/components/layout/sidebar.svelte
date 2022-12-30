<script>
	import { onDestroy, onMount } from 'svelte';
	import { NAV_LINKS } from '$lib/scripts/constants';

	onMount(() => {
		document.body.style.overflow = 'hidden';
	});

	onDestroy(() => {
		document.body.style.overflow = 'initial';
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="sidebar" on:click|stopPropagation>
	<nav>
		{#each NAV_LINKS.slice(1) as link}
			<a class="body body--vlarge" href={link.href}>{link.label}</a>
		{/each}
	</nav>
</div>

<style>
	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		width: 100vw;
		height: calc(100vh - var(--header-height));
		overflow-y: auto;
		background: rgb(237, 235, 229);
		margin-top: var(--header-height);
		border-top: 1px solid var(--background-dark);
		display: flex;
		align-items: center;
	}
	.sidebar nav {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-items: center;
		row-gap: 6vh;
		margin-bottom: var(--header-height);
	}
</style>
