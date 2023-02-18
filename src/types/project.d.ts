import type { PictureGroup } from './picture';

export interface Project extends BaseStrapi {
	name: string;
	slug: string;
	images: PictureGroup;
	project_types: { type: string }[];
	floors: string;
	rooms: string;
	bathrooms: string;
}
