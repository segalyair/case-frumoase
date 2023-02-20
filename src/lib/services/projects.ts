import { STRAPI_API_URL, STRAPI_API_KEY } from '$env/static/private';
import { buildPictureGroup } from '$lib/scripts/picture-utils';

export async function getRecentProjects(fetch: any) {
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	try {
		const response = await fetch(`${STRAPI_API_URL}/api/projects?populate=*`, {
			headers
		});
		if (response.ok) {
			const { data } = await response.json();
			const projects = data.map((p: any) => {
				return {
					...p,
					images: buildPictureGroup(
						'100vw',
						p.images,
						'project-thumbnail',
						['webp', 'avif'],
						['650']
					)
				};
			});
			return projects;
		}
	} catch {
		return [];
	}
}

export async function getProjects(fetch: any) {
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	try {
		const response = await fetch(`${STRAPI_API_URL}/api/projects?populate=*&sort=createdAt:desc`, {
			headers
		});
		if (response.ok) {
			const { data } = await response.json();
			const projects = data.map((p: any) => {
				return {
					...p,
					images: buildPictureGroup(
						'100vw',
						p.images,
						'project-thumbnail',
						['webp', 'avif'],
						['650']
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
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	try {
		const response = await fetch(
			`${STRAPI_API_URL}/api/projects?populate=*&filters[slug][$eq]=${slug}`,
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
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	try {
		const response = await fetch(`${STRAPI_API_URL}/api/project-types?sort=createdAt:asc`, {
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
