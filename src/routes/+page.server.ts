import type { Load } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_KEY } from '$env/static/private';


function addResolution(urlParts: string[], index: number, width: string) {
	let result = JSON.parse(JSON.stringify(urlParts));
	result.splice(index + 1, 0, `w_${width}/q_70`);
	result = result.join('/');
	result += ` ${width}w`;
	return result;
}

function addFile(urlParts: string[], fileType = 'webp') {
	const file = urlParts.at(-1);
	if (file) {
		const fileSplit = file.split('.');
		fileSplit[1] = fileType;
		return fileSplit.join('.');
	}
	return urlParts.join('.');
}

function processImageUrl(url: string, widths: string[]) {
	const splitUrl = url.split('/');
	splitUrl[splitUrl.length - 1] = addFile(splitUrl);

	const uploadIndex = splitUrl.findIndex((e: string) => e === 'upload');
	const result = new Array(widths.length).fill(Object.assign([], splitUrl));
	for (let i = 0; i < widths.length; i++) {
		result[i] = addResolution(result[i], uploadIndex, widths[i]);
	}
	return result.join(', ');
}

async function processSlides(slides: any[]) {
	const widths = ['1280', '1024', '800'];
	const result = slides.map(({ url }: { url: string }) => {
		return processImageUrl(url, widths);
	});
	return result || [];
}

export const load: Load = async ({ fetch }) => {
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	const response = await fetch(`${STRAPI_API_URL}/api/landing-page?populate=*`, {
		headers
	});
	const { data } = await response.json();
	if (response.ok) {
		const slides = await processSlides(data.slides);
		return { slides, specializations: data.specializations };
	}
	return { slides: [], specializations: [] };
};
