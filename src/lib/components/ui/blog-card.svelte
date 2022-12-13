<script>
	import Calendar from '$lib/svgs/calendar.svg?component';
</script>

<a href="/blog" class="blog">
	<div class="imageContainer">
		<img width="33" height="50" src="/images/Union.png" alt="Blog thumbnail" loading="lazy" />
	</div>
	<h3 class="h4">Rookie Once Again is Looking Strong in the LPL</h3>
	<span class="body calendar"><Calendar />June 3, 2022</span>
	{#each [...Array(4)] as _, j (j)}
		<span class={`edge nr${j}`} />
	{/each}
</a>

<style>
	.blog {
		width: min-content;
		position: relative;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		padding: 4rem;
		background: rgba(26, 26, 26, 0.5);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}

	.blog h3 {
		margin-top: 4rem;
	}

	.imageContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 330px;
		height: 208px;
		background: var(--accent-dark-primary);
	}

	.calendar,
	.headerDescription {
		color: var(--text-secondary);
	}

	.calendar {
		margin-top: 1.8rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
