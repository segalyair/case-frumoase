<div class="buyBooster">
	<div class="inner">
		<h2 class="h2">Stop hesitating!</h2>
		<p class="body body--vlarge">Start playing on your deserved rank today</p>
		<a href="/" class="button button--primary">Buy boosting</a>
	</div>
	<span class={`edge nr2`} />
</div>

<style>
	.buyBooster {
		position: relative;
		padding: 8rem 0;
		margin: 15rem 0;
		background: var(--accent-dark-secondary);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		margin-left: var(--content-margin);
	}
	.inner {
		display: grid;
		align-items: center;
		grid-template-columns: auto 1fr 200px;
		column-gap: 10rem;
		padding-left: 10rem;
		margin-right: var(--content-margin);
	}
	p {
		color: var(--text-secondary);
	}

	/*var(--laptop-sm)*/
	@media only screen and (max-width: 1200px) {
		.buyBooster {
			margin-right: var(--content-margin);
		}
		.inner {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 3rem;
			text-align: center;
			margin: 0;
			padding: 2rem;
		}
	}
</style>
