<script lang="ts">
	import Filters from '$lib/components/ui/project/filters.svelte';
	import ProjectList from '$lib/components/ui/project/project-list.svelte';
	import type { Project } from '@customTypes/project';

	export let data: { projects: Project[]; projectTypes: { type: string; label: string }[] };
	const { projects, projectTypes } = data;

	//First filter is always reserved for all data
	const ALL_PROJECTS = projectTypes[0];

	let activeFilter = ALL_PROJECTS;
	$: getProjects =
		activeFilter?.type === ALL_PROJECTS?.type
			? projects
			: projects.filter((p) => p.types.find((t) => t.projectTypes_id?.type === activeFilter?.type));
</script>

<main>
	<h1 class="h1">Listă proiecte</h1>
	<Filters bind:activeFilter filters={projectTypes} />
	<ProjectList projects={getProjects} />
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
</style>
