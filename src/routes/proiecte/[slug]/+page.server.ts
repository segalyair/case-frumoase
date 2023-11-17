import { getProjectBySlug } from '$lib/services/projects';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
    const { slug } = params;
    if (!slug) {
        return { project: {} };
    }
    const project = await getProjectBySlug(fetch, slug);
    return { project };
};
