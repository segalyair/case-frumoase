import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const { NODE_ENV } = process.env;
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({ precompress: true }),
		csp: {
			mode: "auto",
			directives: {
				"default-src": ["self"],
				"style-src": ["self"],
				"img-src": ["self", "data:", "res.cloudinary.com", "i.ytimg.com"],
				"connect-src": NODE_ENV === 'development' ? ["self", "http:"] : ["self", "https:"]
			},
		},
		csrf: {
			checkOrigin: true
		},
	}
};

export default config;
