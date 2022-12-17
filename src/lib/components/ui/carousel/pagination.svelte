<script lang="ts">
	export let items: any[],
		currentItem = 0,
		scrollTo: (index: number) => void;
</script>

<div class="pagination">
	{#each items as _, i}
		<button
			on:click={() => scrollTo(i)}
			class="pageButton"
			class:active={currentItem === i}
			aria-label={`Go to page number ${i + 1}`}
		/>
	{/each}
</div>

<style>
	.pagination {
		position: absolute;
		bottom: 4rem;
		left: 4rem;
		display: flex;
		gap: 2rem;
		background: rgba(255, 255, 255, 0.7);
		padding: 1rem;
		border-radius: 30px;
	}

	.pageButton {
		position: relative;
		width: 1.5rem;
		height: 1.5rem;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 50%;
		margin: 0;
		transition: background 200ms;
	}
	.pageButton:not(.active):hover {
		background: rgba(0, 0, 0, 0.6);
	}
	.pageButton.active {
		background: black;
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
