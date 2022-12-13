<script lang="ts">
	import BoosterCard from '$lib/components/ui/booster-card.svelte';
	import gameActive from '@images/game-active.png?w=50&h=50&webp&quality=100&imagetools';
	import gameDisabled from '@images/game-disabled.png?w=50&h=50&webp&quality=100&imagetools';
	import PageHeadline from '$lib/components/ui/page-headline.svelte';
	import Search from './search.svelte';
	import Filter from '$lib/svgs/filter.svg?component';
	import BuyBooster from '../buy-booster/buy-booster.svelte';

	const booster = { name: 'Crisssuper', score: 5.0 };
	let filters: HTMLFormElement;
	const games = [
		{ label: 'League of legends', value: 'lol' },
		{ label: 'Legends of runeterra', value: 'lor' },
		{ label: 'Teamfight Tactics', value: 'tft' },
		{ label: 'Valorant', value: 'val' },
		{ label: 'League of Legends: WR', value: 'lolwr' }
	];
	let gamesSelected: string[] = [];
</script>

<PageHeadline
	title={'Boosters & Coaches'}
	label={'Here you can find our highly talented boosters and coaches'}
/>
<div class="main content">
	<div class="inner">
		<form class="filters" bind:this={filters}>
			<Search />

			<div class="separator separator--margins" />

			<fieldset>
				<legend><h4 class="h4">Game</h4></legend>
				{#each games as { label, value }}
					<label
						class="label--flex label--game caps"
						class:inactive={!gamesSelected.includes(value)}
						for={value}
					>
						{#if gamesSelected.includes(value)}
							<img width="50" height="50" src={gameActive} alt="Game selected" />
						{:else}
							<img width="50" height="50" src={gameDisabled} alt="Game not selected" />
						{/if}
						<input id={value} type="checkbox" {value} bind:group={gamesSelected} />
						{label}
					</label>
				{/each}
			</fieldset>

			<div class="separator separator--margins" />

			<fieldset>
				<legend><h4 class="h4">Status</h4></legend>
				<label class="label--flex" for="coach">
					<input id="coach" type="radio" name="status" value="coach" />
					Coach
				</label>
				<label class="label--flex" for="online">
					<input id="online" type="radio" name="status" value="online" />
					Online
				</label>
			</fieldset>

			<div class="separator separator--margins" />

			<fieldset>
				<legend><h4 class="h4">Language</h4></legend>
				<label class="label--flex" for="english">
					<input id="english" type="radio" name="language" value="en" />
					English
				</label>
				<label class="label--flex" for="russian">
					<input id="russian" type="radio" name="language" value="ru" />
					Russian
				</label>
				<label class="label--flex" for="german">
					<input id="german" type="radio" name="language" value="de" />
					German
				</label>
				<label class="label--flex" for="spanish">
					<input id="spanish" type="radio" name="language" value="es" />
					Spanish
				</label>
			</fieldset>
			<span class={`edge nr2`} />
		</form>
		<form class="filters-mobile" bind:this={filters}>
			<Search />
			<button type="button" class="caps"><Filter />Filters</button>
		</form>
		<div class="boosterList">
			{#each Array(10).fill(booster) as { name, score }}
				<a href="/booster">
					<BoosterCard {name} {score}>
						<div class="boosterRank">
							<img width="30" height="30" src="/images/Top.png" alt="Top role" />
							<img width="30" height="30" src="/images/Middle.png" alt="Middle role" />
							<img width="30" height="30" src="/images/Support.png" alt="Support role" />
							<img width="50" height="50" src="/images/Rank.png" alt="Rank" />
						</div>
					</BoosterCard>
				</a>
			{/each}
		</div>
	</div>
</div>
<BuyBooster />

<style>
	.content {
		border: none;
	}
	.main {
		padding-top: 15rem;
	}
	.inner {
		display: grid;
		grid-template-columns: 33% 1fr;
		column-gap: 3rem;
		align-items: start;
	}
	.filters {
		padding-bottom: 4rem;
		background: rgba(26, 26, 26, 0.5);
		backdrop-filter: blur(5px);
	}
	.filters-mobile {
		display: none;
	}
	label.inactive {
		color: var(--text-secondary);
	}
	input[type='checkbox'] {
		display: none;
	}
	.boosterList {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
	}
	.boosterRank {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 0 4rem;
	}
	.boosterRank > img:last-child {
		margin-left: auto;
	}

	/*var(--tablet-lg)*/
	@media only screen and (max-width: 1024px) {
		.inner {
			grid-template-columns: 1fr;
		}
		.filters {
			display: none;
		}
		.filters-mobile {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 4rem;
		}
		.filters-mobile button {
			display: inline-flex;
			align-items: center;
			gap: 1rem;
			border: 1px solid var(--accent-primary);
			padding: 2rem 4rem;
		}
	}
	/*var(--phone)*/
	@media only screen and (max-width: 768px) {
		.boosterList {
			grid-template-columns: 1fr;
		}
	}
	/*var(--phone-sm)*/
	@media only screen and (max-width: 576px) {
		.filters-mobile {
			flex-direction: column;
			gap: 2rem;
		}
		.filters-mobile > * {
			width: 100%;
		}
		.filters-mobile > button {
			justify-content: center;
		}
	}
</style>
