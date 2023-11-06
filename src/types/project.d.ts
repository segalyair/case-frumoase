import type { Picture } from './picture';

type Image = {
	directus_files_id: {
		id: string;
		title: string;
	}
}

export type Project = {
	name: string;
	slug: string;
	content: string;
	images: Image[];
	pictures: Picture[];
	fullSizePictures?: Picture[];
	types: { projectTypes_id: { type: string } }[];
	floors: string;
	rooms: string;
	bathrooms: string;
}
