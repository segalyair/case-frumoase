import type { Picture } from './picture';

export interface BlogArticle {
	slug: string;
	title: string;
	shortDescription: string;
	content: string;
	thumbnail: { id: string, title: string };
	thumbnailPicture: Picture;
}
