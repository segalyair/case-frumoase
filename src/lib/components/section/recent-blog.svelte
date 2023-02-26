<script lang="ts">
	import BlogList from '../ui/blog/blog-list.svelte';
	import type { BlogPost } from '@customTypes/blogpost';

	export let posts: BlogPost[] = [];
</script>

<article class="pageSection recentBlogs">
	<h2 class="h2">Case Frumoase de Altadată</h2>
	<BlogList {posts} />
	<a href="/blog" class="button button--dark caps">Vezi mai multe</a>
</article>

<style>
	.recentBlogs {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		text-align: center;
	}
	.recentBlogs h2 {
		padding-bottom: 4rem;
	}
	.recentBlogs a {
		margin-top: 2rem;
	}
</style>
