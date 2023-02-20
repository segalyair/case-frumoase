<script lang="ts">
	import { onMount } from 'svelte';

	let paths: { label: string; url: string; active: boolean }[] = [];
	onMount(() => {
		const pathHierarcy = window.location.pathname.split('/').slice(1);
		pathHierarcy.forEach((p, i) => {
			paths[i] = {
				label: p,
				url: i === 0 ? p : pathHierarcy.slice(i - 1).join('/'),
				active: i === pathHierarcy.length - 1
			};
		});
	});
</script>

<nav>
	<a class="body--large" href="/">Pagina principală</a>
	{#each paths as path}
		<span class="body--large">/</span>
		<a class="body--large" class:active={path.active} href={`/${path.url}`}>{path.label}</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		gap: 1rem;
		border-bottom: 2px solid var(--primary-color);
		padding-bottom: 0.5rem;
	}

	a.active {
		color: var(--primary-color);
	}

	a:hover {
		color: var(--primary-color);
		transition: 200ms all;
	}
</style>
