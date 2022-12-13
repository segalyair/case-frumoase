<script>
	import BlogCard from '$lib/components/ui/blog-card.svelte';
	import PageHeadline from '$lib/components/ui/page-headline.svelte';
	import BuyBooster from '../buy-booster/buy-booster.svelte';
</script>

<PageHeadline
	title={'Recent blog posts'}
	label={'Our blog section is for you learn more about elo boosting and coaching'}
/>
<div class="blogList content">
	{#each Array(15) as _}
		<BlogCard />
	{/each}
</div>
<BuyBooster />

<style>
	.blogList {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 3rem;
	}
</style>
