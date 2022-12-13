<script>
	import Star from '$lib/svgs/star.svg?component';
	const reviews = [
		{
			task: 'Silver II to Gold IV',
			title: 'Great guy',
			body: 'Great guy to play with. I had a lot of fun while climbing. Recommend him 100%.',
			rating: 5,
			date: 'Sep 8, 2022'
		},
		{
			task: 'Bronze III to Gold IV',
			title: 'Not only',
			body: 'Not only the best, the best by far. Lovely kind person, big heart. Not just the best, a god, bronze to gold 100% WR ! are you serious ?! OMG Not just the best, a new friend. <3',
			rating: 5,
			date: 'Sep 6, 2022'
		},
		{
			task: '1 wins in Gold III',
			title: 'as always perfect',
			body: 'as always perfect',
			rating: 5,
			date: 'Sep 8, 2022'
		},
		{
			task: '1 wins in Gold III',
			title: 'as always perfect',
			body: 'as always perfect',
			rating: 5,
			date: 'Sep 8, 2022'
		},
		{
			task: 'Bronze III to Gold IV',
			title: 'Not only',
			body: 'Not only the best, the best by far. Lovely kind person, big heart. Not just the best, a god, bronze to gold 100% WR ! are you serious ?! OMG Not just the best, a new friend. <3',
			rating: 5,
			date: 'Sep 6, 2022'
		},
		{
			task: 'Silver II to Gold IV',
			title: 'Great guy',
			body: 'Great guy to play with. I had a lot of fun while climbing. Recommend him 100%.',
			rating: 5,
			date: 'Sep 8, 2022'
		}
	];
</script>

<div class="content">
	<div class="title">
		<h2 class="h2">Read reviews</h2>
		<p class="body body-vlarge">Genuine customer feedbacks about Eruka</p>
	</div>
	<div class="reviewList">
		{#each reviews as { task, title, body, rating, date }}
			<div class="review">
				<div class="mainContent">
					<p class="body task">{task}</p>
					<h4 class="h4">{title}</h4>
					<p class="body body--large">
						{body}
					</p>
				</div>
				<div class="separator" />
				<div class="body score">
					<Star width="24" height="24" viewBox="0 0 32 32" />
					{rating}
					<span>{date}</span>
				</div>
				{#each [...Array(4)] as _, j (j)}
					<span class={`edge nr${j}`} />
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.title {
		display: flex;
		align-items: center;
		gap: 12rem;
        padding: 12rem 0 8rem;
	}
	.reviewList {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 3rem;
	}
	.review {
		position: relative;
		display: inline-grid;
		grid-template-rows: 1fr auto;
		background: var(--accent-dark-secondary);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		height: 38rem;
	}
	.task {
		color: var(--accent-primary);
		font-weight: 700;
		text-transform: uppercase;
		margin-bottom: 4rem;
	}
	.mainContent {
		padding: 4rem 4rem 0;
	}
	.mainContent h4 {
		margin-bottom: 1rem;
	}
	.score {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 2rem 4rem;
	}
	.score > span:last-child {
		margin-left: auto;
		color: var(--text-secondary);
	}

	@media only screen and (max-width: 1024px){
		.reviewList{
			grid-template-columns: 1fr 1fr;
		}
	}

	@media only screen and (max-width: 768px){
		.reviewList{
			grid-template-columns: 1fr;
		}
	}
</style>
