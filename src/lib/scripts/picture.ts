import type { Picture } from '@customTypes/picture';

export function buildPicture(
	id: string,
	title: string,
	sizes: string,
	types: string[],
	widths: string[],
	watermark: boolean = false
): Picture {
	let sources = [],
		srcsetParts: string[] = [];
	for (const type of types) {
		for (const width of widths) {
			srcsetParts.push(
				`/image/${id}_${type}_${width}${watermark ? "_1" : ""}/${title} ${width}w`
			);
		}
		sources.push({ srcset: srcsetParts.join(', '), type: `image/${type}` });
		srcsetParts = []
	}
	return {
		sources,
		sizes,
		fallback: `/image/${id}/${title}`,
		alt: title
	};
}