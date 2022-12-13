<script lang="ts">
	import GameCategories from './game-categories.svelte';

	export let data: HeaderData = { title: '', label: '', background: [], games: [] };
</script>

<header class="header content">
	<h1 class="h1">{data.title}</h1>
	<p class="body body--vlarge">{data.label}</p>
	<GameCategories games={data.games} />
</header>

<style>
	.header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-left: none;
	}

	/*var(--tablet-lg)*/
	@media only screen and (max-width: 1024px) {
		.header {
			text-align: center;
		}
	}
</style>
