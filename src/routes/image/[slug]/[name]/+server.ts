export const prerender = true;
import { put, list } from '@vercel/blob';
import { DIRECTUS_API_URL, DIRECTUS_TOKEN, WATERMARK_LOGO, BLOB_READ_WRITE_TOKEN } from '$env/static/private';
import sharp from "sharp";

export async function GET({ params }) {
    // When building in order to setup pagefind, ignore creating images
    if (import.meta.env.MODE === "pagefind") {
        return new Response();
    }
    const { slug } = params

    // Check cdn
    const { blobs } = await list({ token: BLOB_READ_WRITE_TOKEN });
    const blob = blobs.find(b => b.pathname === slug)
    if (blob) {
        return await fetch(blob.url);
    }

    const [id, type, width, watermark] = slug.split('_'),
        url = type && width
            ? `${DIRECTUS_API_URL}/assets/${id}?access_token=${DIRECTUS_TOKEN}&key=${type}-w-${width}`
            : `${DIRECTUS_API_URL}/assets/${id}?access_token=${DIRECTUS_TOKEN}`;

    let response = await fetch(url)

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
        response = new Response(finalImage)
    }

    // Add to cdn
    await put(slug, await response.blob(), { access: "public", token: BLOB_READ_WRITE_TOKEN })
    return response;
}