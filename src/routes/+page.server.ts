// import { error } from '@sveltejs/kit';

// type LoadParams = {
// 	slug: string;
// };

// /** @type {import('./$types').PageServerLoad} */
// export const load = async ({ params }: { params: LoadParams }) => {
// 	const slug = `/${params.slug}`;
// 	const page = __pages__.find((p) => p.slug === slug);

// 	if (!page) {
// 		throw error(404, 'Not found');
// 	}

// 	const { data } = await fetch(
// 		`https://api.premiumboosting.com/api/pages?locale=en&filters[slug][$eq]=${slug}
// 		&populate[module][populate][title][populate]=*
// 		&populate[module][populate][label][populate]=*
// 		&populate[module][populate][games][populate]=*
// 		&populate[module][populate][background][populate]=*`
// 	).then((res) => res.json());

// 	//For testing
// 	if (slug.includes('contact') || slug.includes('booster') || slug.includes('blog')) {
// 		return page;
// 	}
// 	if (!data.length) {
// 		throw error(404, 'No page data found');
// 	}

// 	return data[0];
// };
