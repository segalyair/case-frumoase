<script lang="ts">
	export let filters: { type: string; label: string }[] = [];
	export let activeFilter = filters[0];
</script>

<div class="filters">
	{#each filters as filter}
		<button
			type="button"
			class="body--vlarge"
			class:active={activeFilter.type === filter.type}
			on:click={() => (activeFilter = filter)}
		>
			{filter.label}
		</button>
	{/each}
</div>

<style>
	.filters {
		display: flex;
		gap: 3rem;
		grid-column: 1/3;
		padding: 1rem 2rem;
		margin: 4rem 0;
		box-shadow:
			0 3px 6px rgba(0, 0, 0, 0.16),
			0 3px 6px rgba(0, 0, 0, 0.23);
	}
	.filters button {
		padding: 1rem;
	}
	.filters button.active {
		color: var(--primary-color);
	}

	@media (max-width: 500px) {
		.filters {
			gap: 1rem;
		}
	}
</style>
