import { DIRECTUS_API_URL, DIRECTUS_TOKEN } from '$env/static/private';
import { buildPicture } from '$lib/scripts/picture';
import type { Project } from '@customTypes/project';

export async function getRecentProjects(fetch: any) {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(`${DIRECTUS_API_URL}/items/projects?fields=*.*.*&limit=4&sort=-date_created`, {
			headers
		});
		if (response.ok) {
			const { data: projects } = await response.json() as { data: Project[] };
			for (const project of projects) {
				project.pictures = []
				for (const image of project.images) {
					project.pictures.push(
						await buildPicture(image.directus_files_id.id, '(max-width: 800px) 300px, 500px', image.directus_files_id.title, ['avif', 'webp'], ['500', '300'])
					)
				}
			}
			return projects;
		}
	} catch {
		return [];
	}
}

export async function getProjects(fetch: any) {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(`${DIRECTUS_API_URL}/items/projects?fields=*.*.*&sort=-date_created`, {
			headers
		});
		if (response.ok) {
			const { data } = await response.json();
			const projects = data.map((p: Project) => {
				return {
					...p,
					pictures: p.images.map(async ({ directus_files_id: { id, title } }) =>
						(await buildPicture(id, '(max-width: 800px) 300px, 500px', title, ['avif', 'webp'], ['500', '300']))
					)
				};
			});
			return projects;
		}
	} catch {
		return [];
	}
}

export async function getProjectBySlug(fetch: any, slug: string) {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(
			`${DIRECTUS_API_URL}/api/projects?populate=*&filters[slug][$eq]=${slug}`,
			{
				headers
			}
		);
		if (response.ok) {
			const { data } = await response.json();
			return data;
		}
	} catch {
		return [];
	}
}

export async function getProjectTypes(fetch: any) {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(`${DIRECTUS_API_URL}/api/project-types?sort=createdAt:asc`, {
			headers
		});
		if (response.ok) {
			const { data } = await response.json();
			return data;
		}
	} catch {
		return [];
	}
}
