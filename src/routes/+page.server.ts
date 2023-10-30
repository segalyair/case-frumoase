import type { Load } from '@sveltejs/kit';
import { DIRECTUS_API_URL, DIRECTUS_TOKEN } from '$env/static/private';
import { getRecentProjects } from '$lib/services/projects';
// import { getRecentBlogPosts } from '$lib/services/blogPosts';

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
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(`${DIRECTUS_API_URL}/items/homePage`, {
			headers
		});
		if (response.ok) {
			const { data } = await response.json();
			// const mainSlides: PictureGroup = buildPictureGroup(
			// 	'(max-width: 1280px) 100vw, 1280px',
			// 	data.mainSlides,
			// 	'landing-image',
			// 	['webp', 'avif'],
			// 	['1920', '1024']
			// );
			result = {
				mainSlides: [],
				specializations: data.specializations,
				clientSlides: data.clientSlides,
				youtubeLinks: data.youtubeLinks,
				teamMembers: data.teamMembers
			};
		}
		result.projects = await getRecentProjects(fetch);
		// result.blogPosts = await getRecentBlogPosts(fetch);
		return result;
	} catch {
		return result;
	}
};
