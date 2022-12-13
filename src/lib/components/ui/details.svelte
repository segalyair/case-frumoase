<script lang="ts">
	import ArrowDown from '$lib/svgs/arrow-down.svg?component';
	import ArrowRight from '$lib/svgs/arrow-right.svg?component';
	let open: boolean;
</script>

<details bind:open>
	<summary>
		<slot name="summary" />
		{#if open}
			<ArrowDown color="var(--accent-primary)" />
		{:else}
			<ArrowRight color="var(--text-secondary)" />
		{/if}
	</summary>
	<slot name="content" />
</details>

<style>
	details {
		margin-bottom: 2rem;
	}

	summary {
		display: grid;
		grid-template-columns: 1fr 3rem;
		align-items: center;
		text-align: start;
		text-transform: uppercase;
		font: var(--font-h4);
		letter-spacing: 0.1em;
		border-bottom: 1px solid #232323;
		padding: 3rem 0;
	}

	details[open] summary {
		margin-bottom: 3rem;
	}
</style>
