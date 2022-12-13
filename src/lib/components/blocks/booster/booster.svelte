<script>
	import GB from '$lib/svgs/GB.svg?component';
	import RU from '$lib/svgs/RU.svg?component';
	import Polygon from '$lib/svgs/polygon.svg?component';
	import Star from '$lib/svgs/star.svg?component';
	import BoosterReviews from '../booster-reviews/booster-reviews.svelte';
	import BuyBooster from '../buy-booster/buy-booster.svelte';
	import BoosterCard from '$lib/components/ui/booster-card.svelte';
	import gameActive from '@images/game-active.png?w=70&h=70&webp&quality=100&imagetools';
</script>

<div class="booster content">
	<BoosterCard name="Chelybinsk">
		<div class="flags">
			<GB />
			<RU />
		</div>
	</BoosterCard>
	<div class="panel about">
		<h4 class="h4">About</h4>
		<p class="description body body--large">
			Challenger Booster With 95% win ratio over solo And duo q orders, I Promise you with high win
			ratio, Fast, Professional and Friendly Service, Boosting Full time Job so expect your order to
			be finished Fast Playing Roughly 10-12 hours everyday Feel free to Assign me your orders and
			you will have the best experience Ever|
		</p>
		<div class="game">
			<img width="70" height="70" src={gameActive} alt="Game icon" />
			<span class="h4">League of legends</span>
			<img width="70" height="70" src="/images/Rank.png" alt="Rank" />
		</div>
		<div class="reviewSummary">
			<div class="total">
				<Star />
				<p class="h4">4.9</p>
				<p class="body" style="margin-top: 2rem">Based on</p>
				<p class="body"><strong>379 reviews</strong></p>
			</div>
			<div class="totals">
				<div class="totals-row">
					<Star width="24" height="24" viewBox="0 0 32 32" />
					<span class="body">5</span>
					<div class="bar"><span class="value" style="width: 100%" /></div>
					<span class="body">370</span>
				</div>
				<div class="totals-row">
					<Star width="24" height="24" viewBox="0 0 32 32" />
					<span class="body">4</span>
					<div class="bar"><span class="value" style="width: 8%" /></div>
					<span class="body">9</span>
				</div>
				<div class="totals-row">
					<Star width="24" height="24" viewBox="0 0 32 32" />
					<span class="body">3</span>
					<div class="bar"><span class="value" style="width: 0%" /></div>
					<span class="body">0</span>
				</div>
				<div class="totals-row">
					<Star width="24" height="24" viewBox="0 0 32 32" />
					<span class="body">2</span>
					<div class="bar"><span class="value" style="width: 0%" /></div>
					<span class="body">0</span>
				</div>
				<div class="totals-row">
					<Star width="24" height="24" viewBox="0 0 32 32" />
					<span class="body">1</span>
					<div class="bar"><span class="value" style="width: 0%" /></div>
					<span class="body">0</span>
				</div>
			</div>
		</div>
		<span class="edge nr2" />
		<div class="tags">
			<span class="tag body"><Polygon style="color: #00BE85" />Booster</span>
			<span class="tag body"><Polygon style="color: #FF2632;" />Coach</span>
		</div>
	</div>
	<div class="panel roles">
		<h4 class="h4">Roles</h4>
		<div class="role">
			<img width="30" height="30" src="/images/Top.png" alt="Top lane" />
			<span class="caps">Top</span>
		</div>
		<div class="role">
			<img width="30" height="30" src="/images/Middle.png" alt="Middle lane" />
			<span class="caps">Middle</span>
		</div>
		<span class="edge nr2" />
	</div>
</div>
<BoosterReviews />
<BuyBooster />

<style>
	.booster {
		display: grid;
		grid-template-columns: 41rem 1fr;
		grid-template-rows: 1fr auto;
		align-items: flex-start;
		gap: 3rem;
		border: none;
	}
	.panel {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		position: relative;
		padding: 4rem 0;
		background: var(--accent-dark-secondary);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}
	.panel.roles {
		padding: 4rem;
	}
	.panel.about {
		gap: 2rem;
	}
	.flags {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
	}
	.role {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.about {
		grid-column: 2;
		grid-row: 1/3;
	}
	.about h4,
	.about .description {
		padding: 0 4rem;
	}
	.reviewSummary {
		display: flex;
		text-align: center;
		gap: 3rem;
		padding: 2rem 8rem 0 4rem;
	}
	.total {
		background: rgba(255, 255, 255, 0.02);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		padding: 3rem;
	}

	.game {
		border: 1px solid var(--background-dark);
		border-width: 1px 0;
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 2rem 4rem;
	}
	.game > img:last-child {
		margin-left: auto;
	}
	.totals {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
		flex-grow: 1;
	}
	.totals-row {
		display: grid;
		grid-template-columns: auto auto 1fr 4rem;
		align-items: center;
		gap: 1.5rem;
		width: 100%;
	}
	.totals-row > *:last-child {
		text-align: left;
	}
	.bar {
		position: relative;
		width: 100%;
		height: 1rem;
		background: rgba(255, 255, 255, 0.02);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}
	.value {
		position: absolute;
		left: 0;
		height: inherit;
		background: var(--accent-primary);
	}
	.tags {
		position: absolute;
		top: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.02);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		display: flex;
	}
	.tags > .tag:last-child {
		border-left: 1px solid var(--background-dark);
	}
	.tag {
		padding: 1.5rem 3rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	@media only screen and (max-width: 1024px) {
		.booster {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto auto;
		}
		.about {
			grid-column: initial;
			grid-row: 3;
		}
	}

	@media only screen and (max-width: 576px) {
		.panel.about {
			padding-top: 10rem;
		}
		.reviewSummary {
			flex-direction: column;
			padding: 0 4rem;
		}
		.game {
			gap: 1rem;
			flex-direction: column-reverse;
		}
		.game > img:first-child {
			display: none;
		}
		.game > img:last-child {
			margin: 0;
			width: 5rem;
			height: 5rem;
		}
		.tags {
			display: grid;
			grid-template-columns: 1fr 1fr;
			width: 100%;
		}
	}
</style>
