import { DIRECTUS_API_URL, DIRECTUS_TOKEN } from '$env/static/private';
import { updateContentImages } from '$lib/scripts/page-content';
import { buildPicture } from '$lib/scripts/picture';
import * as cheerio from 'cheerio';
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
						buildPicture(id, title, '(max-width: 800px) 300px, 500px', ['avif', 'webp'], ['500', '300'], true)
					),
					thumbnailPicture: buildPicture(p.thumbnail.id, p.thumbnail.title, '(max-width: 800px) 300px, 500px', ['avif', 'webp'], ['500', '300'], true),
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
						buildPicture(id, title, '(max-width: 800px) 300px, 500px', ['avif', 'webp'], ['500', '300'], true)
					),
					thumbnailPicture: buildPicture(p.thumbnail.id, p.thumbnail.title, '(max-width: 800px) 300px, 500px', ['avif', 'webp'], ['500', '300'], true),
				};
			});
		}
	} catch {
		return [];
	}
}

export async function getProjectBySlug(fetch: any, slug: string): Promise<Project | null> {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(
			`${DIRECTUS_API_URL}/items/projects?fields=*.*.*&filter[slug][_eq]=${slug}`,
			{
				headers
			}
		);
		if (response.ok) {
			const { data } = await response.json(),
				[project] = data as Project[],
				$ = cheerio.load(project.content, null, false),
				$img = $('img')
			updateContentImages($img, DIRECTUS_API_URL);
			project.content = $.html();
			project.pictures = project.images.map(({ directus_files_id: { id, title } }) =>
				buildPicture(id, title, '(max-width: 600px) 300px, (max-width: 1100px) 500px, 900px', ['avif', 'webp'], ['900', '500', '300'], true)
			)
			project.fullSizePictures = project.images.map(({ directus_files_id: { id, title } }) =>
				buildPicture(id, title, '(max-width: 800px) 720px, 1280px', ['avif', 'webp'], ['1280', '720'], true)
			)
			project.paginationPictures = project.images.map(({ directus_files_id: { id, title } }) =>
				buildPicture(id, title, '200px', ['avif', 'webp'], ['200'])
			)
			return project as Project;
		}
	} catch (err) {
		console.error(err)
	}
	return null;
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
