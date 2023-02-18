export type Source = { type: string; srcset: string };

export type PictureGroup = {
	sizes: string;
	pictures: Picture[];
};

export type Picture = {
	sources: Source[];
	fallback: string;
	alt?: string;
};
