<script lang="ts">
	import BlogList from '$lib/components/ui/blog/blog-list.svelte';
	import type { BlogArticle } from '@customTypes/blogArticle';

	export let data: { articles: BlogArticle[] };
	const { articles } = data;
</script>

<main>
	<h1 class="h1">Case frumoase de altădată</h1>
	<BlogList {articles} />
</main>

<style>
	main {
		padding-top: var(--menu-height);
		margin-top: 6rem;
		margin-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		margin-bottom: 8rem;
	}
</style>
