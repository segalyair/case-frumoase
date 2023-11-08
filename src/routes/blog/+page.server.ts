import { getRecentBlogArticles } from '$lib/services/blogArticles';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const articles = await getRecentBlogArticles(fetch);
	return { articles };
};
