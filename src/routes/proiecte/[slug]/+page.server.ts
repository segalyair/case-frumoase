import type { Load } from '@sveltejs/kit';
import { getProjectBySlug } from '$lib/services/projects';
import { buildPictureGroup } from '$lib/scripts/picture-utils';

export const load: Load = async ({ fetch, params }) => {
	const { slug } = params;
	if (!slug) {
		return { project: {} };
	}
	const [data] = await getProjectBySlug(fetch, slug);
	data.fullImages = buildPictureGroup(
		'100vw',
		data.images,
		'landing-image',
		['webp', 'avif'],
		['1920']
	);
	data.images = buildPictureGroup(
		'650px',
		data.images,
		'project-thumbnail',
		['webp', 'avif'],
		['650']
	);
	return { project: data };
};
