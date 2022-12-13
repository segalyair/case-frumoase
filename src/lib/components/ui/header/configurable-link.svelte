<script lang="ts">
	import ChevronDown from '$lib/svgs/chevron-down.svg?component';
	export let icon: ConstructorOfATypedSvelteComponent,
		isDropdown: boolean,
		href = '/',
		ariaLabel: string | undefined = undefined;
</script>

{#if href !== '/'}
	<a {href} class="configurableLink caps" aria-label={ariaLabel}>
		<svelte:component this={icon} />
		<slot />
		{#if isDropdown} <ChevronDown color="var(--text-secondary)" />{/if}
	</a>
{:else}
	<button type="button" class="configurableLink caps" aria-label={ariaLabel} on:click>
		<svelte:component this={icon} />
		<slot />
		{#if isDropdown} <ChevronDown color="var(--text-secondary)" />{/if}
	</button>
{/if}

<style>
	.configurableLink {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 1.5rem;
		white-space: nowrap;
	}
</style>
