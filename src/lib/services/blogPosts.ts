import { STRAPI_API_URL, STRAPI_API_KEY } from '$env/static/private';
import { buildPicture, buildPictureGroup } from '$lib/scripts/picture-utils';
import type { BlogPost } from '@customTypes/dto/blogpost';

export async function getRecentBlogPosts(fetch: any) {
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	try {
		const response = await fetch(`${STRAPI_API_URL}/api/blog-posts?populate=*`, {
			headers
		});
		if (response.ok) {
			const { data } = await response.json();
			const blogPosts = data.map((b: BlogPost) => ({
				...b,
				headerImage: buildPicture(b.headerImage, 'project-thumbnail', ['webp', 'avif'], ['650'])
			}));
			return blogPosts;
		}
	} catch {
		return [];
	}
}

export async function getBlogPostBySlug(fetch: any, slug: string) {
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	try {
		const response = await fetch(
			`${STRAPI_API_URL}/api/blog-posts?populate=*&filters[slug][$eq]=${slug}`,
			{
				headers
			}
		);
		if (response.ok) {
			const { data } = await response.json();
			return data;
		}
	} catch {
		return [];
	}
}
