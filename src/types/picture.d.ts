export type Source = { srcset: string; type: string; };

export type Picture = {
	sizes: string;
	sources: Source[];
	fallback: string;
	alt?: string;
};
