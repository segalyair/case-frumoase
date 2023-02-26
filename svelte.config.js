import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({ precompress: true }),
		csp: {
			mode: "auto",
			directives: {
				'script-src': ['self']
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
