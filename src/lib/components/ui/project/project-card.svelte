<script lang="ts">
	import type { Project } from '@customTypes/project';
	import PictureBuilder from '../picture-builder.svelte';

	export let project: Project;
</script>

<a class="project" href={`proiecte/${project.slug}`}>
	{#if project.thumbnailPicture}
		<PictureBuilder picture={project.thumbnailPicture} height="281px" />
	{/if}
	<h3 class="h3">{project.name}</h3>
	<p class="body--large details">
		<span>{project.floors} niveluri</span>
		<span>-</span>
		<span>{project.rooms} camere</span>
		<span>-</span>
		<span>{project.bathrooms} băi</span>
	</p>
	<button class="button button--dark button--small">VEZI PROIECT</button>
</a>

<style>
	.project {
		outline: 2px solid transparent;
		border-radius: 4px;
		width: 50rem;
		position: relative;
		transition: outline 200ms;
	}

	.project:hover {
		outline-color: var(--primary-color);
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

	@media (max-width: 500px) {
		.project {
			width: 30rem;
		}
		.project :global(img) {
			max-width: 30rem;
			height: auto;
		}
	}
</style>
