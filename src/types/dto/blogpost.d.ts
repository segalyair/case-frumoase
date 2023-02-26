import type { PictureGroup } from '../picture';

export interface BlogPost extends BaseStrapi {
	slug: string;
	title: string;
	content: string;
	headerImage: Media;
	images: Media[];
	fullImages: PictureGroup;
}
