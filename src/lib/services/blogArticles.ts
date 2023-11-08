import { DIRECTUS_API_URL, DIRECTUS_TOKEN } from '$env/static/private';
import { buildPicture } from '$lib/scripts/picture';
import type { BlogArticle } from '@customTypes/blogArticle';

export async function getRecentBlogArticles(fetch: any) {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(`${DIRECTUS_API_URL}/items/BlogArticles?fields=*.*.*&limit=4&sort=-date_created`, {
			headers
		});
		if (response.ok) {
			const { data: blogArticles } = await response.json() as { data: BlogArticle[] };
			for (const article of blogArticles) {
				article.thumbnailPicture = buildPicture(article.thumbnail.id, '(max-width: 800px) 300px, 500px', article.thumbnail.title, ['avif', 'webp'], ['500', '300'])
			}
			return blogArticles;
		}
	} catch {
		return [];
	}
}

export async function getBlogArticleBySlug(fetch: any, slug: string) {
	const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
	try {
		const response = await fetch(
			`${DIRECTUS_API_URL}/items/BlogArticles?fields=*.*.*&filter[slug][_eq]=${slug}`,
			{
				headers
			}
		);
		if (response.ok) {
			const { data } = await response.json(),
				[article] = data as BlogArticle[];
			article.thumbnailPicture = buildPicture(article.thumbnail.id, '(max-width: 800px) 300px, 500px', article.thumbnail.title, ['avif', 'webp'], ['500', '300'])
			return article;
		}
	} catch {
		return null;
	}
}
