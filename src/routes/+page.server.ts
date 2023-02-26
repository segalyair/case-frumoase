import type { Load } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_KEY } from '$env/static/private';
import type { PictureGroup } from 'src/types/picture';
import { buildPictureGroup } from '$lib/scripts/picture-utils';
import { getRecentProjects } from '$lib/services/projects';
import { getRecentBlogPosts } from '$lib/services/blogPosts';

export const load: Load = async ({ fetch }) => {
	let result: any = {
		mainSlides: {},
		specializations: [],
		clientSlides: [],
		youtubeLinks: [],
		projects: [],
		teamMembers: [],
		blogPosts: []
	};
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	try {
		const response = await fetch(`${STRAPI_API_URL}/api/landing-page?populate=*`, {
			headers
		});

		if (response.ok) {
			const { data } = await response.json();
			const mainSlides: PictureGroup = buildPictureGroup(
				'(max-width: 1280px) 100vw, 1280px',
				data.mainSlides,
				'landing-image',
				['webp', 'avif'],
				['1920', '1024']
			);
			result = {
				mainSlides: mainSlides,
				specializations: data.specializations,
				clientSlides: data.clientSlides,
				youtubeLinks: data.youtubeLinks,
				teamMembers: data.teamMembers
			};
		}
		result.projects = await getRecentProjects(fetch);
		result.blogPosts = await getRecentBlogPosts(fetch);
		return result;
	} catch {
		return result;
	}
};
