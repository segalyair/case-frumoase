<script lang="ts">
	import type { Project } from '@customTypes/project';
	import ProjectCard from './project-card.svelte';

	export let projects: Project[] = [];
</script>

<div class="project-list">
	{#each projects as project, i}
		<ProjectCard {project} />
	{/each}
</div>

<style>
	.project-list {
		text-align: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	@media (max-width: 1024px) {
		.project-list {
			grid-template-columns: 1fr;
		}
	}
</style>
