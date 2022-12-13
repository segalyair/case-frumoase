<script>
	import PageHeadline from '$lib/components/ui/page-headline.svelte';
	import BuyBooster from '../buy-booster/buy-booster.svelte';
	import LatestBlog from '../latest-blog/latest-blog.svelte';
</script>

<PageHeadline title={'The Rise Of Sona ADC — Lux & Sona Botlane Domination'} />
<article>
	<section class="content">
		<h2 class="h2">A Neverending Quest For Improvement</h2>
		<p class="body body--large">
			Over the course of Season 10, the game saw some drastic changes including a new autofill
			system and even duo-parity matchmaking to improve the balance between paired teams and improve
			the quality of play.
		</p>
		<p class="body body--large">
			However, as Season 11 peers around the corner - it looks like the development team at League
			of Legends HQ is busy with lining up the next batch of major changes.
		</p>
		<p class="body body--large">
			And one of those changes just so happens to be the removal of the current promotional games
			system.
		</p>
		{#each [...Array(2)] as _, j (j)}
			<span class={`edge nr${j + 2} edge--simple edge--active`} />
		{/each}
	</section>
	<section class="content">
		<h2 class="h2">A Neverending Quest For Improvement</h2>
		<p class="body body--large">
			Over the course of Season 10, the game saw some drastic changes including a new autofill
			system and even duo-parity matchmaking to improve the balance between paired teams and improve
			the quality of play.
		</p>
		<p class="body body--large">
			However, as Season 11 peers around the corner - it looks like the development team at League
			of Legends HQ is busy with lining up the next batch of major changes.
		</p>
		<p class="body body--large">
			And one of those changes just so happens to be the removal of the current promotional games
			system.
		</p>
		<p class="body body--large">
			Over the course of Season 10, the game saw some drastic changes including a new autofill
			system and even duo-parity matchmaking to improve the balance between paired teams and improve
			the quality of play.
		</p>
		<p class="body body--large">
			However, as Season 11 peers around the corner - it looks like the development team at League
			of Legends HQ is busy with lining up the next batch of major changes.
		</p>
		<p class="body body--large">
			And one of those changes just so happens to be the removal of the current promotional games
			system.
		</p>
		{#each [...Array(2)] as _, j (j)}
			<span class={`edge nr${j + 2} edge--simple edge--active`} />
		{/each}
	</section>
</article>
<BuyBooster />
<LatestBlog />

<style>
	article {
		background-color: var(--accent-dark-primary);
	}
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 4rem;
		padding: 15rem 11rem;
		border: 1px solid var(--background-dark);
		border-top: none;
	}
	section h2 {
		text-align: center;
	}
	section p {
		color: var(--text-secondary);
	}

	@media only screen and (max-width: 1024px) {
		section {
			padding-left: 5rem;
			padding-right: 5rem;
		}
	}

	@media only screen and (max-width: 576px) {
		section {
			margin: 0;
			padding: 10rem 2rem 8rem;
			border-width: 0 0 1px;
		}
	}
</style>
