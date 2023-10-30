// // this will do the trick
export const prerender = true;
import { DIRECTUS_API_URL, DIRECTUS_TOKEN } from '$env/static/private';

export async function GET({ params }) {
    const { slug } = params,
        [id, type, width] = slug.split('_')
    if (type && width) {
        return fetch(
            `${DIRECTUS_API_URL}/assets/${id}?access_token=${DIRECTUS_TOKEN}&key=${type}-w-${width}`
        );
    }
    return fetch(`${DIRECTUS_API_URL}/assets/${id}?access_token=${DIRECTUS_TOKEN}`)
}