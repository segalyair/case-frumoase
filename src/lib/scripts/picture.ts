import type { Picture } from '@customTypes/picture';

export function buildPicture(
	id: string,
	title: string,
	sizes: string,
	types: string[],
	widths: string[],
	watermark: boolean = false,
	path: string = "/images/",
): Picture {
	let sources = [],
		srcsetParts: string[] = [];
	const sortedWidths = widths.sort((a, b) => Number(b) - Number(a))
	for (const type of types) {
		for (const width of sortedWidths) {
			srcsetParts.push(
				`${path}${id}/${width}/${watermark && Number(width) >= 720 ? "w_" : ""}${title}.${type} ${width}w`
			);
		}
		sources.push({ srcset: srcsetParts.join(', '), type: `image/${type}` });
		srcsetParts = []
	}
	return {
		sources,
		sizes,
		fallback: `/images/${id}/${sortedWidths[0]}/${title}.webp`,
		alt: title
	};
}