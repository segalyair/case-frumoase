<script lang="ts">
	import gameActive from '@images/game-active.png?w=145&webp&quality=100&imagetools';
	import gameDisabled from '@images/game-disabled.png?w=145&webp&quality=100&imagetools';
	export let games: GameCategory[] = [];
	let selected = games[0].id;
</script>

<svelte:head>
	<link rel="preload" as="image" href={gameActive} />
	<link rel="preload" as="image" href={gameDisabled} />
</svelte:head>

<div class="gameCategories">
	{#each games as game (game.id)}
		<button
			type="button"
			class={`gameCategory${selected === game.id ? ' selected' : ''}`}
			on:click={() => (selected = game.id)}
		>
			<img
				width={145}
				height={120}
				alt="Game category"
				src={selected === game.id ? gameActive : gameDisabled}
			/>
			<span class={'h4'}>
				{game.label}
			</span>
			{#each [...Array(4)] as _, j (j)}
				<span class={`edge nr${j}${selected === game.id ? ' edge--active' : ''}`} />
			{/each}
		</button>
	{/each}
</div>

<style>
	.gameCategories {
		display: flex;
		justify-content: space-between;
		overflow-x: auto;
		max-width: 129rem;
		gap: 2rem;
		margin: 8rem 0;
	}

	.gameCategory {
		min-width: 24.2rem;
		max-width: 24.2rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		padding: 4rem 4.8rem;
		text-align: center;
		text-transform: uppercase;
		background: var(--accent-dark-secondary);
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		cursor: pointer;
	}

	.gameCategory > span {
		margin: auto;
	}
</style>
