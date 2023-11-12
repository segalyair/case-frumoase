import type { Load } from '@sveltejs/kit';
import { getRecentProjects } from '$lib/services/projects';
import { buildPicture } from '$lib/scripts/picture';
import { getTeamMembers } from '$lib/services/teamMembers';
import type { LandingPage } from '@customTypes/landing-page';
import { getRecentBlogArticles } from '$lib/services/blogArticles';

export const load: Load = async ({ fetch }) => {
	try {
		const landingImages = await (await fetch('/image/landing')).json() as { id: string, title: string }[];
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
