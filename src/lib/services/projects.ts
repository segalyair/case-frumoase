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
			const { data } = await response.json() as { data: Project[] };
			return data.map(p => {
				return {
					...p,
					pictures: p.images.map(({ directus_files_id: { id, title } }) =>
						buildPicture(id, '(max-width: 800px) 300px, 500px', title, ['avif', 'webp'], ['500', '300'])
					)
				};
			});
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
			const { data } = await response.json() as { data: Project[] };
			return data.map(p => {
				return {
					...p,
					pictures: p.images.map(({ directus_files_id: { id, title } }) =>
						buildPicture(id, '(max-width: 800px) 300px, 500px', title, ['avif', 'webp'], ['500', '300'])
					)
				};
			});
		}
	} catch {
		return [];
	}
}

export async function getProjectBySlug(fetch: any, slug: string): Promise<Project[]> {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(
			`${DIRECTUS_API_URL}/items/projects?fields=*.*.*&filter[slug][_eq]=${slug}`,
			{
				headers
			}
		);
		if (response.ok) {
			const { data } = await response.json();
			return data as Project[];
		}
	} catch (err) {
		console.error(err)
	}
	return [];
}

export async function getProjectTypes(fetch: any) {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(`${DIRECTUS_API_URL}/items/projectTypes`, {
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
