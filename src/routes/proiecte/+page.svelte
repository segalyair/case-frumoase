<script lang="ts">
	import Header from '$lib/components/layout/header.svelte';
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

<Header title={'Proiecte Case Frumoase'}></Header>
<main>
	<Filters bind:activeFilter filters={projectTypes} />
	<ProjectList projects={getProjects} />
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
