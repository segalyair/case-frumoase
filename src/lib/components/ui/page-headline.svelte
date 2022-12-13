<script lang="ts">
	export let title: string,
		label: string = '';
</script>

<div class="headline">
	<div class="content">
		<h1 class="h1">{title}</h1>
		{#if label}
			<p class="body body--vlarge">{label}</p>
		{/if}
	</div>
</div>

<style>
	.headline {
		text-align: center;
		padding-bottom: 8rem;
		border-bottom: 1px solid var(--background-dark);
	}
	.headline p {
		color: var(--text-secondary);
	}
</style>
