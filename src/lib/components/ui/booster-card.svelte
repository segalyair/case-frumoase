<script lang="ts">
	import Polygon from '$lib/svgs/polygon.svg?component';
	import Star from '$lib/svgs/star.svg?component';
	export let name = '',
		edges = true,
		score: number | undefined = undefined;
</script>

<div class="panel name">
	<div class="imageContainer">
		<img width="33" height="50" style="margin:auto" src="/images/Union.png" alt="Union" />
		<Polygon style="position: absolute; right: -0.9rem; bottom: -1rem; color: #00BE85" />
	</div>
	<h4 class="h4">{name}</h4>
	{#if score}
		<span class="body score">
			<Star width="24" height="24" viewBox="0 0 32 32" />
			{score}
		</span>
	{/if}
	<div class="separator" />
	<slot />
	{#if edges}
		{#each [...Array(4)] as _, j (j)}
			<span class={`edge nr${j}`} />
		{/each}
	{:else}
		<span class="edge nr2" />
	{/if}
</div>

<style>
	.panel {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 4rem;
		padding: 4rem 0;
		background: var(--accent-dark-secondary);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}
	.imageContainer {
		position: relative;
		display: flex;
		width: 13rem;
		height: 13rem;
		margin: auto;
		background: var(--accent-dark-primary);
	}
	.panel.name {
		text-align: center;
	}
	.score {
		display: flex;
		place-content: center;
		gap: 0.7rem;
	}
</style>
