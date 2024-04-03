<script lang="ts">
	import ProjectList from '$lib/components/ui/project/project-list.svelte';
	import BlogList from '$lib/components/ui/blog/blog-list.svelte';
	import type { BlogArticle } from '@customTypes/blogArticle';
	import type { Project } from '@customTypes/project';

	export let blogArticles: BlogArticle[], projects: Project[];
</script>

<section>
	<h2>V-ar putea interesa</h2>
	<BlogList articles={blogArticles} />
	<ProjectList projects={projects.slice(0, Math.max(0, 4 - blogArticles.length))} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}
</style>
