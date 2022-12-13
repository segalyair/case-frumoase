<script>
	import BlogCard from '$lib/components/ui/blog-card.svelte';
	import ArrowRight from '$lib/svgs/arrow-right.svg?component';
</script>

<div class="latestBlog content">
	<div class="header">
		<h2 class="h2">Latest blog</h2>
		<p class="body body--vlarge headerDescription">
			Follow us to get the latest updates about League of Legends!
		</p>
		<a href="/" class="button button--arrow">
			Visit blog <ArrowRight color="var(--accent-primary)" />
		</a>
	</div>
	<div class="blogList">
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</div>
</div>

<style>
	.latestBlog {
		display: flex;
		flex-direction: column;
		gap: 8rem;
		padding: 15rem 0;
	}

	.header {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto;
		column-gap: 20rem;
		row-gap: 2rem;
	}
	h2 {
		grid-row: 1/3;
	}
	.blogList {
		display: grid;
		grid-template-columns: auto auto auto;
		column-gap: 3rem;
		overflow-x: auto;
	}

	/*var(--tablet-lg)*/
	@media only screen and (max-width: 1024px) {
		.header {
			column-gap: 10rem;
		}
	}

	/*var(--phone)*/
	@media only screen and (max-width: 768px) {
		.header {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto auto;
			justify-items: center;
			text-align: center;
		}
	}
</style>
