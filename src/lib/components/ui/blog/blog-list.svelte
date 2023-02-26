<script lang="ts">
	import type { BlogPost } from '../../../../types/blogpost';
	import BlogCard from './blog-card.svelte';

	export let posts: BlogPost[] = [];
</script>

<div class="list">
	{#each posts as post}
		<BlogCard {post} />
	{/each}
</div>
