export type BaseStrapi = {
	id: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};

export type Media = {
	alternativeText?: string;
	caption: string;
	createdAt: string;
	ext: string;
	formats: null;
	hash: string;
	height: number;
	id: number;
	mime: string;
	name: string;
	previewUrl: null;
	provider: string;
	provider_metadata: { public_id: string; resource_type: string };
	size: number;
	updatedAt: string;
	url: string;
	width: number;
};
