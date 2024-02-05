import { DIRECTUS_API_URL, DIRECTUS_TOKEN } from '$env/static/private';

export async function getLandingPageImages(fetch: any) {
    const headers = { authorization: `bearer ${DIRECTUS_TOKEN}` };
    try {
        const response = await fetch(`${DIRECTUS_API_URL}/items/landingPage?fields=*.*.*`, {
            headers
        });
        if (response.ok) {
            const { data } = await response.json();
            return data.images.map(i => i.directus_files_id);
        }
    } catch {
        return [];
    }
}