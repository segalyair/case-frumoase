import type { Load } from '@sveltejs/kit';
import { DIRECTUS_API_URL, DIRECTUS_TOKEN } from '$env/static/private';
import { getRecentProjects } from '$lib/services/projects';
import { buildPicture } from '$lib/scripts/picture';
import { getTeamMembers } from '$lib/services/teamMembers';
import type { LandingPage } from '@customTypes/landing-page';
// import { getRecentBlogPosts } from '$lib/services/blogPosts';

export const load: Load = async ({ fetch }) => {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(`${DIRECTUS_API_URL}/items/homePage?fields=*.*.*`, {
			headers
		});
		if (response.ok) {
			const { data } = await response.json();
			const result: LandingPage = {
				landingPicture: buildPicture(data.landingImage.id, '(max-width: 800px) 720px, 1280px', data.landingImage.title, ['avif', 'webp'], ['720', '1280']),
				// specializations: data.specializations,
				// clientSlides: data.clientSlides,
				// youtubeLinks: data.youtubeLinks,
				projects: await getRecentProjects(fetch),
				teamMembers: await getTeamMembers(fetch)
			};
			// result.blogPosts = await getRecentBlogPosts(fetch);
			return result;
		}

	} catch (err) {
		console.error(err)
	}
	return {}
};
