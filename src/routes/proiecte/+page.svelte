<!-- <script lang="ts">
	import Filters from '$lib/components/ui/project/filters.svelte';
	import ProjectList from '$lib/components/ui/project/project-list.svelte';
	import type { Project } from '@customTypes/project';
	
	export let data: { projects: Project[]; projectTypes: { type: string; label: string }[] };
	const { projects, projectTypes } = data;

	let activeFilter = projectTypes[0];
	//First filter is always reserved for all data
	$: getProjects =
		activeFilter.type != projectTypes[0].type && activeFilter.type
			? projects.filter((p) =>
					p.project_types.map(({ type }: { type: string }) => type).includes(activeFilter.type)
			  )
			: projects;
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
</style> -->
