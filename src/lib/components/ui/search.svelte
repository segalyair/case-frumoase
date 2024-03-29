<script lang="ts">
	import Search from '$lib/svgs/search.svg?component';
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';

	export let searching = false;
	let searchValue = '';
	const dispatch = createEventDispatcher();

	function handleSearch() {
		if (searching && searchValue?.length > 0) {
			goto(`/search?q=${searchValue}`);
			searchValue = '';
			searching = false;
			dispatch('search');
			return;
		}
		searching = true;
	}
</script>

<search>
	<form class="searchContainer" on:submit|preventDefault>
		{#if searching}
			<!-- svelte-ignore a11y-autofocus -->
			<input bind:value={searchValue} autofocus type="search" placeholder="Căutare" />
		{/if}
		<button id="search" aria-label="Search" on:click={handleSearch}>
			<Search
				class="searchIcon"
				width="40"
				height="40"
				viewBox="0 0 24 24"
				color="var(--text-light-color)"
			/>
		</button>
	</form>
</search>

<style>
	.searchContainer {
		display: inline-flex;
		align-items: center;
		gap: 2rem;
		justify-self: end;
	}
</style>
