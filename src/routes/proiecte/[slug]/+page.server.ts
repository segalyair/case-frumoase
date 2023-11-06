import { buildPicture } from '$lib/scripts/picture';
import { getProjectBySlug } from '$lib/services/projects';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
    const { slug } = params;
    if (!slug) {
        return { project: {} };
    }
    const [project] = await getProjectBySlug(fetch, slug);
    project.pictures = project.images.map(i =>
        buildPicture(i.directus_files_id.id, '(max-width: 800px) 300px, 500px', i.directus_files_id.title, ['avif', 'webp'], ['500', '300']))
    project.fullSizePictures = project.images.map(i =>
        buildPicture(i.directus_files_id.id, '(max-width: 800px) 720px, 1280px', i.directus_files_id.title, ['avif', 'webp'], ['1280', '720']))
    return { project };
};
