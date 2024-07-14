// import { DIRECTUS_API_URL, DIRECTUS_TOKEN, WATERMARK_LOGO, BLOB_READ_WRITE_TOKEN } from '$env/static/private';
import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js'

const types = ["avif", "webp"],
    DIRECTUS_API_URL = "http://localhost:8055/",
    WATERMARK_ID = "543c60f6-750a-48b6-85ba-51a3d63cd9ed",
    ACCESS_TOKEN = "wLtSCVwQFpfZROKIerQUr4FOZZJ-c18a",
    PROJECTS_FOLDER_ID = "ad7d2c61-03b7-4ae1-9dfa-269456aac2b9",
    TEAMS_FOLDER_ID = "97ed6f21-96b3-48c0-8eda-6de64e575771",
    BLOG_FOLDER_ID = "b2f2edce-158d-41af-96ef-a85b78be1edf"

const supabase = createClient('https://ygnhsnlbzrqvwamckttc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnbmhzbmxienJxdndhbWNrdHRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDI4NDg2MSwiZXhwIjoyMDM1ODYwODYxfQ.zNZdrbjI5i7t0BqKPD-Aw_UxW1VBMLW60kXmuGlei44')
const patchHeaders = new Headers();
patchHeaders.append("Content-Type", "application/json");

const skipCheckingWidths = true;

let logoArrayBuffer;
async function addWatermark(imageArrayBuffer, filename) {
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
    supabase
        .storage
        .from('images')
        .upload(filename, finalImage, {
            cacheControl: '3600',
            upsert: false
        })
}

function sleep(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createAndUploadImage(file, type, width, limiter, includeWatermark) {
    const dir = `${file.id}/${width}/`,
        response = await fetch(`${DIRECTUS_API_URL}assets/${file.id}?access_token=${ACCESS_TOKEN}&key=${type}-w-${width}`, {})

    if (limiter % 6 === 0) {
        await sleep(400);
    }
    response.arrayBuffer().then(async (arrayBuffer) => {
        supabase
            .storage
            .from('images')
            .upload(`${dir}${file.title}.${type}`, arrayBuffer, {
                cacheControl: '3600',
                upsert: false
            })
        if (width >= 720 && includeWatermark) {
            addWatermark(arrayBuffer, `${dir}w_${file.title}.${type}`);
        }
    });
    return limiter + 1;
}

async function getRegularImages(currentFiles, widths, folder) {
    const filesResponse = await fetch(`${DIRECTUS_API_URL}files?access_token=${ACCESS_TOKEN}&filter[folder][_eq]=${folder}`),
        { data: files } = await filesResponse.json();

    let limiter = 0;
    for (const file of files.filter(f => !currentFiles.includes(f.id))) {
        const newFileTitle = `${file.title.replaceAll(' ', '-')}`;
        if (file.title !== newFileTitle) {
            fetch(`${DIRECTUS_API_URL}files/${file.id}?access_token=${ACCESS_TOKEN}`, {
                method: "PATCH",
                headers: patchHeaders,
                body: JSON.stringify({ "title": newFileTitle })
            });
            file.title = newFileTitle;
        }
        for (const type of types) {
            for (const width of widths) {
                limiter = await createAndUploadImage(file, type, width, limiter, false);
            }
        }
    }
}

async function getProjectImages(currentFiles, widths, includeWatermark) {
    const foldersMap = {},
        folderResponse = await fetch(`${DIRECTUS_API_URL}folders?access_token=${ACCESS_TOKEN}&filter[parent][_eq]=${PROJECTS_FOLDER_ID}`),
        { data: folders } = await folderResponse.json();

    folders.forEach(f => { foldersMap[f.id] = { name: f.name, index: 1 } })

    let allFiles = [];
    for (const folder of folders.map(f => f.id)) {
        const filesResponse = await fetch(`${DIRECTUS_API_URL}files?access_token=${ACCESS_TOKEN}&filter[folder][_eq]=${folder}`),
            { data: files } = await filesResponse.json();
        allFiles = [...allFiles, ...files];
    }

    let limiter = 0;
    for (const file of allFiles.filter(f => !currentFiles.includes(f.id))) {
        //rename file title
        const folder = foldersMap[file.folder],
            newFileTitle = `${folder.name.replaceAll(' ', '-')}-${folder.index}`;
        folder.index += 1;

        console.log(`Working on file ${newFileTitle} - ${file.id}...`);
        if (file.title !== newFileTitle) {
            fetch(`${DIRECTUS_API_URL}files/${file.id}?access_token=${ACCESS_TOKEN}`, {
                method: "PATCH",
                headers: patchHeaders,
                body: JSON.stringify({ "title": newFileTitle })
            });
            file.title = newFileTitle;
        }

        let selectedWidths = widths;
        if (!skipCheckingWidths) {
            const { data: supabaseFiles } = await supabase
                .storage
                .from('images')
                .list(file.id),
                currentWidths = supabaseFiles.map(f => Number(f.name));
            selectedWidths = widths.filter(w => !currentWidths.includes(w))
        }
        for (const type of types) {
            for (const width of selectedWidths) {
                limiter = await createAndUploadImage(file, type, width, limiter, includeWatermark);
            }
        }
    }
}

async function getImages() {
    const { data: supabaseFiles } = await supabase
        .storage
        .from('images')
        .list('', {
            limit: 2000,
        }),
        currentFiles = supabaseFiles.map(f => f.name);
    await getProjectImages(currentFiles, [1280, 900, 720, 500, 200], true);
    await getRegularImages(currentFiles, [300], TEAMS_FOLDER_ID);
    await getRegularImages(currentFiles, [500, 300], BLOG_FOLDER_ID);
}

getImages();
// const { data, error } = await supabase
//   .storage
//   .emptyBucket('images')