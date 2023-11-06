import type { Picture } from '@customTypes/picture';

export function buildPicture(
	id: string,
	sizes: string,
	title: string,
	types: string[],
	widths: string[]
): Picture {
	let sources = [],
		srcsetParts: string[] = [];
	for (const type of types) {
		for (const width of widths) {
			srcsetParts.push(
				`/image/${id}_${type}_${width}/${title} ${width}w`
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