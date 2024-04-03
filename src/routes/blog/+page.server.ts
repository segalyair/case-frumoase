import { getBlogArticles } from '$lib/server/services/blogArticles';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const articles = await getBlogArticles(fetch);
	return { articles };
};
