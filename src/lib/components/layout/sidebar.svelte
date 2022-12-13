<script>
	import { MAIN_NAV_LINKS, NAV_LINKS } from '../../scripts/constants.js';
	import { onDestroy, onMount } from 'svelte';
	import LanguageSelect from '../ui/header/language-select.svelte';
	import TotalBoosters from '../ui/header/total-boosters.svelte';
	import ConfigurableLink from '../ui/header/configurable-link.svelte';

	onMount(() => {
		document.body.style.overflow = 'hidden';
	});

	onDestroy(() => {
		document.body.style.overflow = 'initial';
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav class="sidebar" on:click|stopPropagation>
	<div class="row">
		<TotalBoosters />
		<LanguageSelect color={'var(--accent-primary)'} />
	</div>

	<div class="row flex-column">
		{#each MAIN_NAV_LINKS as { label, icon, isDropdown, href }}
			<ConfigurableLink {icon} {isDropdown} {href}>
				{label}
			</ConfigurableLink>
		{/each}
	</div>

	<div class="row flex-column" style="border: none;">
		{#each NAV_LINKS as { label, href }}
			<a {href} class="body link">{label}</a>
		{/each}
	</div>
</nav>

<style>
	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		width: 100vw;
		height: calc(100vh - var(--header-height));
		overflow-y: auto;
		background: #151515;
		margin-top: var(--header-height);
		border-top: 1px solid var(--background-dark);
	}

	.row {
		display: flex;
		justify-content: space-between;
		padding: 2rem;
		border-bottom: 1px solid var(--background-dark);
	}

	.row.flex-column {
		padding-top: 4rem;
		padding-bottom: 4rem;
		flex-direction: column;
		gap: 4rem;
	}
</style>
