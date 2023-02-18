<script lang="ts">
	export let items: number,
		currentItem = 0,
		scrollTo: (index: number) => void;
</script>

<div class="pagination glass">
	{#each new Array(items) as _, i}
		<button
			on:click|preventDefault={() => scrollTo(i)}
			class="pageButton"
			class:active={currentItem === i}
			aria-label={`Go to page number ${i + 1}`}
		/>
	{/each}
</div>

<style>
	.pagination {
		position: absolute;
		display: flex;
		gap: 2rem;
		padding: 1rem;
		bottom: 2rem;
		left: 2rem;
	}

	.pageButton {
		position: relative;
		width: 3rem;
		height: 3rem;
		background: rgba(0, 0, 0, 0.3);
		margin: 0;
		transition: background-color 200ms;
	}
	.pageButton:not(.active):hover {
		background: rgba(0, 0, 0, 0.6);
	}
	.pageButton.active {
		background: var(--text-light-color);
	}
	.pageButton:before {
		content: '';
		position: absolute;
		top: -1.25rem;
		left: -0.75rem;
		width: 3rem;
		height: 4rem;
	}
	.pagination {
		margin: auto;
	}
</style>
