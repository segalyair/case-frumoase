import type { Load } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_KEY } from '$env/static/private';

function addFile(urlParts: string[], fileType = 'webp') {
	const file = urlParts.at(-1);
	if (file) {
		const fileSplit = file.split('.');
		fileSplit[1] = fileType;
		return fileSplit.join('.');
	}
	return urlParts.join('.');
}

function addResolution(urlParts: string[], index: number, width: string) {
	let result = JSON.parse(JSON.stringify(urlParts));
	result.splice(index + 1, 0, `w_${width}/q_70`);
	result = result.join('/');
	result += ` ${width}w`;
	return result;
}

export const load: Load = async ({ fetch }) => {
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	const response = await fetch(`${STRAPI_API_URL}/api/landing-page?populate=*`, {
		headers
	});
	if (response.ok) {
		const widths = ['1280', '1024', '800', '640'];
		const { data } = await response.json();
		const slides = data.slides.map(({ url }: { url: string }) => {
			const splitUrl = url.split('/');
			splitUrl[splitUrl.length - 1] = addFile(splitUrl);
			const uploadIndex = splitUrl.findIndex((e: string) => e === 'upload');
			const result = new Array(widths.length).fill(Object.assign([], splitUrl));
			for (let i = 0; i < widths.length; i++) {
				result[i] = addResolution(result[i], uploadIndex, widths[i]);
			}
			return result.join(', ');
		});
		return { slides };
	}
};
