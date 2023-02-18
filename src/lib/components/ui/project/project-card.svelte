<script lang="ts">
	import type { Project } from 'src/types/project';
	import ThumbnailCarousel from '../carousel/thumbnail-carousel.svelte';

	export let project: Project;
</script>

<a class="project" href={`proiecte/${project.slug}`}>
	<ThumbnailCarousel pictureGroup={project.images} />
	<h3 class="h3">{project.name}</h3>
	<p class="body--large details">
		<span>{project.floors} niveluri</span>
		-
		<span>{project.rooms} camere</span>
		-
		<span>{project.bathrooms} băi</span>
	</p>
</a>

<style>
	.project {
		border: 2px solid transparent;
		border-radius: 4px;
		width: 65rem;
		position: relative;
		transition: border 200ms;
	}

	.project:hover{
		border-color: var(--primary-color);
	}

	.project h3 {
		margin: 2rem 0;
	}

	.details {
		width: 30rem;
		margin: auto auto 2rem auto;
		padding: 2rem 0;
		border: 0 dashed var(--background-semi-transparent);
		border-width: 1px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
