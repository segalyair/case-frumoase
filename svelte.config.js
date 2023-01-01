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
				'default-src': ['self'],
				'script-src': ['self']
			},
		},
		csrf: {
			checkOrigin: true
		},
	}
};

export default config;
