export const prerender = true;
import { DIRECTUS_API_URL, DIRECTUS_TOKEN, LANDING_PAGE_IMAGE_FOLDER } from '$env/static/private';

export async function GET({ params }) {
    const response = await fetch(`${DIRECTUS_API_URL}/files?filter[folder][_eq]=${LANDING_PAGE_IMAGE_FOLDER}&access_token=${DIRECTUS_TOKEN}`)
    if (response.ok) {
        const { data } = await response.json() as { data: { id: string, title: string }[] },
            randomIndex = Math.floor(Math.random() * data.length),
            randomImage = data[randomIndex]
        return new Response(JSON.stringify({ id: randomImage.id, title: randomImage.title }))
    }
    return new Response("");
}