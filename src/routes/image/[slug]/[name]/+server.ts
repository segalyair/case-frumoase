export const prerender = true;
import { DIRECTUS_API_URL, DIRECTUS_TOKEN, WATERMARK_LOGO } from '$env/static/private';
import sharp from "sharp";

export async function GET({ params }) {

    const { slug } = params,
        [id, type, width, watermark] = slug.split('_'),
        url = type && width
            ? `${DIRECTUS_API_URL}/assets/${id}?access_token=${DIRECTUS_TOKEN}&key=${type}-w-${width}`
            : `${DIRECTUS_API_URL}/assets/${id}?access_token=${DIRECTUS_TOKEN}`,
        response = await fetch(url)

    if (watermark) {
        const logoResponse = await fetch(`${DIRECTUS_API_URL}/assets/${WATERMARK_LOGO}?access_token=${DIRECTUS_TOKEN}`),
            logo = await logoResponse.arrayBuffer(),
            overlayImg = await sharp(logo)
                .composite([
                    {
                        input: Buffer.from([0, 0, 0, 128]),
                        raw: {
                            width: 1,
                            height: 1,
                            channels: 4,
                        },
                        tile: true,
                        blend: 'dest-in',
                    }
                ])
                .toBuffer(),
            image = await response.arrayBuffer(),
            finalImage = await sharp(image)
                .composite([
                    { input: overlayImg, gravity: 'southeast' }
                ])
                .toBuffer();
        return new Response(finalImage)
    }
    return response;
}