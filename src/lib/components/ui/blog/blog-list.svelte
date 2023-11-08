<script lang="ts">
	import type { BlogArticle } from '../../../../types/blogArticle';
	import BlogCard from './blog-card.svelte';

	export let articles: BlogArticle[] = [];
</script>

<div class="list">
	{#each articles as article}
		<BlogCard {article} />
	{/each}
</div>
