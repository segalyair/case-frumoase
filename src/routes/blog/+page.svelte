<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
import BlogList from '$lib/components/ui/blog/blog-list.svelte';
	import type { BlogArticle } from '@customTypes/blogArticle';

	export let data: { articles: BlogArticle[] };
	const { articles } = data;
</script>

<Header title={"Case frumoase de altădată"}/>
<main>
	
	<BlogList {articles} />
</main>

<style>
	main {
		margin-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
</style>
