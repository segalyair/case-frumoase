import type { Load } from '@sveltejs/kit';
import { getBlogArticleBySlug } from '$lib/services/blogArticles';

export const load: Load = async ({ fetch, params }) => {
	const { slug } = params;
	if (!slug) {
		return null;
	}
	const data = await getBlogArticleBySlug(fetch, slug);
	return data;
};
