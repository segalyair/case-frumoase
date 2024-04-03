import { getBlogArticles } from '$lib/server/services/blogArticles';
import { getProjectBySlug, getRelatedContentProjects } from '$lib/server/services/projects';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
    const { slug } = params;
    if (!slug) {
        return { project: {} };
    }

    const project = await getProjectBySlug(fetch, slug);
    if (!project) {
        return { project: null, relatedContent: { project: [], blogArticles: [] } }
    }

    const relatedContentProjects = project?.types ? await getRelatedContentProjects(fetch, project?.types.map(t => t.projectTypes_id.id), project?.id) : [],
        relatedContentBlogArticles = (await getBlogArticles(fetch) ?? [])
            .filter(b => b.relatedProjects.map(p => p.item.id).includes(project?.id));
    return { project, relatedContent: { projects: relatedContentProjects, blogArticles: relatedContentBlogArticles } };
};
