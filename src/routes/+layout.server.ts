import type { Load } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_KEY } from '$env/static/private';

type fetch = typeof fetch;

async function getLatestArticles(fetch: fetch) {
	try {
		const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
		const response = await fetch(`${STRAPI_API_URL}/api/articles?populate=*`, {
			headers
		});
		if (response.ok) {
			const { data } = await response.json();
			const articles: Article[] = data.map(({ title, slug }: { title: string; slug: string }) => ({
				title,
				slug
			}));
			return articles || [];
		}
	} catch (err) {
		console.error(err);
		return [];
	}
}

export const load: Load = async ({ fetch }) => {
	const articles = await getLatestArticles(fetch);
	return { articles };
};
