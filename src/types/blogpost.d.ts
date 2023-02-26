import type { Picture, PictureGroup } from './picture';

export interface BlogPost extends BaseStrapi {
	slug: string;
	title: string;
	content: string;
	headerImage: Picture;
	images: PictureGroup;
	fullImages: PictureGroup;
}
