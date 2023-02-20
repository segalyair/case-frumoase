<script lang="ts">
	import Breadcrumbs from '$lib/components/ui/breadcrumbs.svelte';
	import ImageList from '$lib/components/ui/project/image-list.svelte';
	import type { Project } from 'src/types/project';

	export let data: { project: Project };
	const { project } = data;
</script>

<div class="container">
	<header>
		<h1 class="h1">{project.name}</h1>
		<Breadcrumbs />
	</header>
	<main class="body--vlarge">
		{project.description || ''}
	</main>

	<ImageList pictureGroup={project.images} fullImageGroup={project.fullImages} />
</div>

<style>
	.container {
		padding-top: var(--menu-height);
		display: flex;
		flex-direction: column;
		gap: 4rem;
		max-width: 130rem;
		margin: 4rem auto;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	main {
		white-space: pre-wrap;
		max-width: 92rem;
	}
</style>
