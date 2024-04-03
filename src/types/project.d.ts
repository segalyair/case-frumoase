import type { Picture } from './picture';

type Image = {
	directus_files_id: {
		id: string;
		title: string;
	}
}

export type Project = {
	id: number;
	name: string;
	slug: string;
	content: string;
	images: Image[];
	pictures: Picture[];
	fullSizePictures?: Picture[];
	paginationPictures?: Picture[];
	thumbnail: { id: string, title: string };
	thumbnailPicture?: Picture;
	types: { projectTypes_id: { id: number, type: string, label: string } }[];
	floors: string;
	rooms: string;
	bathrooms: string;
}
