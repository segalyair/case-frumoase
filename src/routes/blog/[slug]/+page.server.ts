import type { Load } from '@sveltejs/kit';
import { getBlogPostBySlug } from '$lib/services/blogPosts';
import { buildPicture, buildPictureGroup } from '$lib/scripts/picture-utils';

export const load: Load = async ({ fetch, params }) => {
	const { slug } = params;
	if (!slug) {
		return { post: {} };
	}
	const [data] = await getBlogPostBySlug(fetch, slug);
	data.headerImage = buildPicture(
		data.headerImage,
		'landing-image',
		['webp', 'avif'],
		['1920', '1024']
	);
	if (data) {
		data.fullImages = buildPictureGroup(
			'100vw',
			data.images,
			'landing-image',
			['webp', 'avif'],
			['1920']
		);
		data.images = buildPictureGroup(
			'100vw',
			data.images,
			'project-thumbnail',
			['webp', 'avif'],
			['650']
		);
	}
	return data;
};
