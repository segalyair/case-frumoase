import type { Load } from '@sveltejs/kit';
import { STRAPI_API_URL, STRAPI_API_KEY } from '$env/static/private';

function addResolution(urlParts: string[], index: number, width: string, addSize = true) {
	let result = JSON.parse(JSON.stringify(urlParts));
	result.splice(index + 1, 0, `w_${width}/q_70`);
	result = result.join('/');
	if (addSize) {
		result += ` ${width}w`;
	}

	return result;
}

function replaceImageType(urlParts: string[], fileType = 'webp') {
	const file = urlParts.at(-1);
	if (file) {
		const fileSplit = file.split('.');
		fileSplit[1] = fileType;
		return fileSplit.join('.');
	}
	return urlParts.join('.');
}

function processImageUrl(url: string, widths: string[] = [], fileType = 'webp') {
	const splitUrl = url.split('/');
	splitUrl[splitUrl.length - 1] = replaceImageType(splitUrl, fileType);

	if (!widths.length) {
		return splitUrl.join('/');
	}

	const uploadIndex = splitUrl.findIndex((e: string) => e === 'upload');
	const result = new Array(widths.length).fill(Object.assign([], splitUrl));
	for (let i = 0; i < widths.length; i++) {
		result[i] = addResolution(result[i], uploadIndex, widths[i], widths.length > 1);
	}
	return result.join(', ');
}

async function getRecentProjects(fetch: any) {
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	try {
		const response = await fetch(`${STRAPI_API_URL}/api/projects?populate=*`, {
			headers
		});
		if (response.ok) {
			const { data } = await response.json();
			const projects = data.map((p: any) => {
				return {
					...p,
					images: p.images.map((i: any) => {
						return processImageUrl(i.url, ['650']);
					})
				};
			});
			return projects;
		}
	} catch {
		return [];
	}
}

export const load: Load = async ({ fetch }) => {
	let result: any = {
		mainSlides: {},
		specializations: [],
		clientSlides: [],
		youtubeLinks: [],
		projects: [],
		teamMembers: []
	};
	const headers = { authorization: `bearer ${STRAPI_API_KEY}` };
	try {
		const response = await fetch(`${STRAPI_API_URL}/api/landing-page?populate=*`, {
			headers
		});

		if (response.ok) {
			const { data } = await response.json();
			const widths = ['1280', '1024', '800'];
			const mainSlides = {
				sizes: '(max-width: 480px) 100vw, (max-width: 1280px) 90vw, 1280px',
				slides: data.mainSlides.map((s: any) => ({
					avif: processImageUrl(s.url, widths, 'avif'),
					webp: processImageUrl(s.url, widths, 'webp'),
					fallback: s.url
				}))
			};
			for (const slide of data.clientSlides.filter((s: any) => s.image?.url)) {
				slide.image.url = processImageUrl(slide.image.url);
			}
			result = {
				mainSlides: mainSlides,
				specializations: data.specializations,
				clientSlides: data.clientSlides,
				youtubeLinks: data.youtubeLinks,
				teamMembers: data.teamMembers.map((m: any) => {
					return { ...m, image: { ...m.image, url: processImageUrl(m.image.url) } };
				})
			};
		}
		result.projects = await getRecentProjects(fetch);
		return result;
	} catch {
		return result;
	}
};
