import type { Load } from '@sveltejs/kit';
import { getRecentProjects } from '$lib/server/services/projects';
import { buildPicture } from '$lib/scripts/picture';
import { getTeamMembers } from '$lib/server/services/teamMembers';
import type { LandingPage } from '@customTypes/landing-page';
import { getRecentBlogArticles } from '$lib/server/services/blogArticles';
import { getLandingPageImages } from '$lib/server/services/landingPage';

export const load: Load = async ({ fetch }) => {
	try {
		const landingImages = await getLandingPageImages(fetch);
		const result: LandingPage = {
			landingPictures: landingImages.map(i => buildPicture(i.id, i.title, '(max-width: 800px) 720px, 1280px', ['avif', 'webp'], ['720', '1280'])),
			projects: await getRecentProjects(fetch),
			blogPosts: await getRecentBlogArticles(fetch),
			teamMembers: await getTeamMembers(fetch)
		};
		return result;
	}
	catch (err) {
		console.error(err)
	}
	return {}
};
