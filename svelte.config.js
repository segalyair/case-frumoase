import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({ precompress: true }),
		csp: {
			mode: "auto",
			directives: {
				// 'script-src': ['self', 'https://case-frumoase-comments-kxxoe1hx1-segalyair.vercel.app'],
			},
		},
		csrf: {
			checkOrigin: true
		},
		alias: {
			'@customTypes': './src/types'
		}
	}
};

export default config;
