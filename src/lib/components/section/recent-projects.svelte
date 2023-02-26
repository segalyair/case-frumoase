<script lang="ts">
	import type { Project } from '@customTypes/project';
	import ProjectList from '../ui/project/project-list.svelte';

	export let projects: Project[] = [];
</script>

<article class="pageSection projects">
	<h2 class="h2">Proiecte frumoase</h2>
	<ProjectList {projects} />
	<a href="/proiecte" class="button button--dark caps">Vezi mai multe</a>
</article>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		text-align: center;
	}
	.projects h2 {
		padding-bottom: 4rem;
	}
	.projects a {
		margin-top: 2rem;
	}
</style>
