// /* eslint-disable @typescript-eslint/ban-ts-comment */
// // @ts-nocheck
// import fetch from 'node-fetch';
// import fs from 'fs';

// async function downloadImages() {
//     const response = await fetch(`https://api.premiumboosting.com/uploads/game_icon_a21d3afa4f.png`);
//     response.body.pipe(fs.createWriteStream("src/lib/images/downloaded/game-active.png"))
// }

// async function getPrerenderEntries() {
//     downloadImages()
//     const res = await fetch(
//         `https://api.premiumboosting.com/api/pages?locale=all&populate=*&pagination[limit]=10000`
//     );
//     const payload = await res.json();
//     const pages = payload.data;
//     pages.push({ id: 2, locale: 'en', pagename: 'Contact Us', slug: '/contact-us', module: [{ id: 1, __component: 'shared.contact', title: 'Contact us', label: 'Contact for answers to all of your boosting related questions or to sign up for our services!' }] })
//     pages.push({ id: 3, locale: 'en', pagename: 'Booster', slug: '/booster', module: [{ id: 1, __component: 'shared.booster' }] })
//     pages.push({ id: 4, locale: 'en', pagename: 'Boosters', slug: '/boosters', module: [{ id: 1, __component: 'shared.booster-list' }] })
//     pages.push({ id: 5, locale: 'en', pagename: 'Blog Posts', slug: '/blog-list', module: [{ id: 1, __component: 'shared.blog-list' }] })
//     pages.push({ id: 6, locale: 'en', pagename: 'Blog', slug: '/blog', module: [{ id: 1, __component: 'shared.blog' }] })
//     const entries = pages.map(({ slug }) => slug)
//     return { entries, pages };
// }

// export const { entries, pages } = await getPrerenderEntries()
