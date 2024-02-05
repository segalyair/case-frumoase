// import { DIRECTUS_API_URL, DIRECTUS_TOKEN, WATERMARK_LOGO, BLOB_READ_WRITE_TOKEN } from '$env/static/private';
import fs from 'fs';
import { readdir } from 'fs/promises';
import sharp from 'sharp';

const types = ["avif", "webp"]
const widths = [1280, 900, 720, 500, 300, 200, 100];

const DIRECTUS_API_URL = "http://localhost:8055/",
    WATERMARK_ID = "543c60f6-750a-48b6-85ba-51a3d63cd9ed",
    ACCESS_TOKEN = "4aDlrOgJuWiQXrP6r78fIXhuZsoLSalO",
    PROJECTS_FOLDER_ID = "ad7d2c61-03b7-4ae1-9dfa-269456aac2b9";

let logoArrayBuffer;
async function addWatermark(imageArrayBuffer) {
    if (!logoArrayBuffer) {
        const logoResponse = await fetch(`${DIRECTUS_API_URL}assets/${WATERMARK_ID}?access_token=${ACCESS_TOKEN}`);
        logoArrayBuffer = await logoResponse.arrayBuffer()
    }
    const overlayImg = await sharp(logoArrayBuffer)
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
        finalImage = await sharp(imageArrayBuffer)
            .composite([
                { input: overlayImg, gravity: 'southeast' }
            ])
            .toBuffer();
    return finalImage;
}

async function getImages() {
    !fs.existsSync("./static/images/") && fs.mkdirSync("./static/images/", { recursive: true })

    const directories = (await readdir('./static/images', { withFileTypes: true }))
        .filter(dirent => dirent.isDirectory())
        .map(dir => dir.name);

    const folderResponse = await fetch(`${DIRECTUS_API_URL}folders?access_token=${ACCESS_TOKEN}`),
        { data: folders } = await folderResponse.json(),
        projectFolders = folders.filter(f => f.parent === PROJECTS_FOLDER_ID).map(f => f.id),
        filesResponse = await fetch(`${DIRECTUS_API_URL}files?access_token=${ACCESS_TOKEN}`),
        { data: files } = await filesResponse.json();
    for (const file of files.filter(f => !directories.includes(f.id))) {
        for (const type of types) {
            for (const width of widths) {
                // All widths for project images only
                if (!projectFolders.includes(file.folder) && file.width < width) {
                    continue;
                }
                const fileResponse = await fetch(`${DIRECTUS_API_URL}assets/${file.id}?access_token=${ACCESS_TOKEN}&key=${type}-w-${width}`),
                    dir = `./static/images/${file.id}/${width}/`;

                !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true })
                const imageArrayBuffer = await fileResponse.arrayBuffer();
                fs.writeFileSync(`${dir}${file.title}.${type}`, Buffer.from(imageArrayBuffer))

                if (width >= 720) {
                    const watermarkBuffer = await addWatermark(imageArrayBuffer);
                    fs.writeFileSync(`${dir}w_${file.title}.${type}`, Buffer.from(watermarkBuffer))
                }
            }
        }
    }
}

getImages();
