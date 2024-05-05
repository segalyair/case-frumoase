<script lang="ts">
	import BlogCard from '../ui/blog/blog-card.svelte';
	import ProjectCard from '../ui/project/project-card.svelte';
	import type { BlogArticle } from '@customTypes/blogArticle';
	import type { Project } from '@customTypes/project';

	export let blogArticles: BlogArticle[], projects: Project[];
</script>

<section>
	<h2>V-ar putea interesa</h2>
	<div class="list">
		{#each blogArticles as article}
			<BlogCard {article} />
		{/each}
		{#each projects.slice(0, Math.max(0, 4 - blogArticles.length)) as project, i}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
		row-gap: 2 rem;
	}

	.list {
		text-align: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: 1024px) {
		.list {
			grid-template-columns: 1fr;
		}
	}
</style>
