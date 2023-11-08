import type * as cheerio from 'cheerio';
export function updateContentImages(elements: cheerio.Cheerio<cheerio.Element>, apiUrl: string) {
    try {
        for (const element of elements) {
            const src = element.attribs["src"],
                alt = element.attribs["alt"];
            if (src.includes(apiUrl)) {
                // Directus appends ? at end of src of image for some wierd reason 
                const id = src.split('/').slice(-1)[0].replaceAll('?', ''),
                    newSrc = `/image/${id}`;
                element.attribs["src"] = `${newSrc}_webp_720/${alt}`;
                element.attribs["srcset"] = `${newSrc}_webp_300/${alt} 300w, ${newSrc}_webp_500/${alt} 500w, ${newSrc}_webp_720/${alt} 720w`;
                element.attribs["sizes"] = '(max-width: 500px) 300px, (max-width: 800px) 500px, 720px';
            }
        }
    }
    catch (err) {
        console.error(err)
    }
}