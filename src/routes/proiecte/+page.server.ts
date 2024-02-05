import type { Load } from '@sveltejs/kit';
import { getProjects, getProjectTypes } from '$lib/server/services/projects';

export const load: Load = async ({ fetch }) => {
	const projects = await getProjects(fetch);
	const projectTypes = await getProjectTypes(fetch);
	return { projects, projectTypes };
};
