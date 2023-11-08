// import type { Load } from '@sveltejs/kit';
// import { DIRECTUS_API_URL, DIRECTUS_TOKEN } from '$env/static/private';
// import type { BlogArticle } from '@customTypes/blogArticle';

// type fetch = typeof fetch;

// async function getLatestArticles(fetch: fetch) {
// 	try {
// 		const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
// 		const response = await fetch(`${DIRECTUS_API_URL}/api/articles?populate=*`, {
// 			headers
// 		});
// 		if (response.ok) {
// 			const { data } = await response.json();
// 			const articles: BlogArticle[] = data.map(({ title, slug }: { title: string; slug: string }) => ({
// 				title,
// 				slug
// 			}));
// 			return articles || [];
// 		}
// 	} catch (err) {
// 		console.error(err);
// 		return [];
// 	}
// }

// export const load: Load = async ({ fetch }) => {
// 	const articles = await getLatestArticles(fetch);
// 	return { articles };
// };
