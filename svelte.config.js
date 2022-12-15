import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import { entries } from "./prebuild.js";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({ precompress: true }),
		// prerender: {
		// 	entries
		// },
		csp: {
			mode: "auto",
			directives: { "script-src": ["self"] },
		},
		csrf: {
			checkOrigin: true
		},
	}
};

export default config;
