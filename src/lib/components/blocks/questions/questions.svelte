<script>
	import Details from '$lib/components/ui/details.svelte';
	import BuyBooster from '../buy-booster/buy-booster.svelte';
	import LatestBlog from '../latest-blog/latest-blog.svelte';
</script>

<section class="questions content" aria-labelledby="questionsHeading">
	<h2 id="questionsHeading" class="h2">Have any questions?</h2>
	<h3 class="h3">Maybe your question is have been answered, check this out!</h3>
	<div class="contactContainer">
		<span class="body body--vlarge intro"
			>Our live customers support is up 24/7! Talk to us now!</span
		>
		<a class="button button--primary" href="/">Contact us</a>
	</div>
	<div class="detailsList">
		<Details>
			<span slot="summary" class="detailsSummary"
				>Why would you choose us over our competitors
			</span>
			<div slot="content" class="detailsContent body">
				Here at premiumboosting.com we provide the best Elo Boosting experience out there. For that
				we hired the most talented players that reached Grandmaster or Challenger ranks without an
				issue and also have vast League Elo Boosting experience. We picked them from all over the
				world to provide Lol Elo Boosting to as many players as possible. You can use our services
				on the North America, Europe West, Europe Nordic & East, Brazil, Latin America, Russia,
				Turkey and Oceania servers. We provide the fastest and safest LoL Boosting thanks to our VPN
				servers, making it nearly impossible for Riot or anyone else to trace the games back to us.
				With years of experience, thousands of completed orders and happy customers, your order is
				guaranteed to be completed!
			</div>
		</Details>
		<Details>
			<span slot="summary" class="detailsSummary">How does this service work?</span>
			<div slot="content" class="detailsContent body">Missing content</div>
		</Details>
		<Details>
			<span slot="summary" class="detailsSummary"
				>How can I be sure my account won't be stolen?</span
			>
			<div slot="content" class="detailsContent body">Missing content</div>
		</Details>
	</div>
</section>
<BuyBooster />
<LatestBlog />

<style>
	.questions {
		display: grid;
		grid-template-columns: 30rem 1fr;
		grid-template-rows: auto 1fr;
		align-items: start;
		column-gap: 15rem;
		padding-top: 15rem;
	}

	#questionsHeading {
		margin-bottom: 2rem;
	}

	.contactContainer {
		display: flex;
		flex-direction: column;
	}

	a {
		margin-top: 8rem;
		width: fit-content;
		padding-left: 4rem;
		padding-right: 4rem;
	}

	.detailsContent,
	.intro {
		color: var(--text-secondary);
	}

	/*var(--laptop-sm)*/
	@media only screen and (max-width: 1200px) {
		.questions {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto auto 1fr;
			justify-items: center;
			text-align: center;
		}
		.contactContainer {
			grid-row: 2;
			align-items: center;
		}

		a {
			margin-top: 6rem;
			margin-bottom: 8rem;
		}

		h3 {
			max-width: 75%;
		}
		.detailsList {
			margin-top: 5rem;
			width: 100%;
		}

		.detailsSummary,
		.detailsContent {
			padding-left: 5rem;
		}

		.detailsContent {
			text-align: left;
		}
	}
</style>
