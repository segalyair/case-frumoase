import type { Picture, Source } from 'src/types/picture';
import type { Media } from 'src/types/base-strapi';
import type { CloudinaryTransform } from 'src/types/cloudinary-transform';

type TransformWidthPair = {
	transform: CloudinaryTransform;
	width: string;
};

function getCloudinaryLink(imageUrlPart: string, transform: CloudinaryTransform) {
	return `https://res.cloudinary.com/dfjaetvir/image/upload/t_${transform}/${imageUrlPart}`;
}

function buildSrcset(imageUrlPart: string, transformWidthPairs: TransformWidthPair[]) {
	return transformWidthPairs
		.map((tw) => `${getCloudinaryLink(imageUrlPart, tw.transform)} ${tw.width}w`)
		.join(', ');
}

export function buildPictureGroup(
	sizes: string,
	images: Media[],
	transform: CloudinaryTransform,
	types: string[] = ['webp'],
	widths: string[] = []
) {
	const pictureGroup = { sizes, pictures: [] as Picture[] };
	for (const image of images) {
		const picture = {
			sources: [] as Source[],
			fallback: getCloudinaryLink(image.provider_metadata.public_id, transform),
			alt: image.alternativeText
		};
		for (const type of types) {
			picture.sources.push({
				type: `image/${type}`,
				srcset: buildSrcset(
					image.provider_metadata.public_id,
					widths.map((w) => ({ width: w, transform: `${transform}-${type}-${w}` }))
				)
			});
		}
		pictureGroup.pictures.push(picture);
	}
	return pictureGroup;
}
