import type { Load } from '@sveltejs/kit';
import { getRecentProjects } from '$lib/services/projects';
import { buildPicture } from '$lib/scripts/picture';
import { getTeamMembers } from '$lib/services/teamMembers';
import type { LandingPage } from '@customTypes/landing-page';
// import { getRecentBlogArticles } from '$lib/services/blogPosts';

export const load: Load = async ({ fetch }) => {
	try {
		const landingImage = await (await fetch('/image/landing')).json() as { id: string, title: string };
		const result: LandingPage = {
			landingPicture: buildPicture(landingImage.id, '(max-width: 800px) 720px, 1280px', landingImage.title, ['avif', 'webp'], ['720', '1280']),
			projects: await getRecentProjects(fetch),
			teamMembers: await getTeamMembers(fetch)
		};
		return result;
	}
	catch (err) {
		console.error(err)
	}
	return {}
};
