import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
// import { pages } from './prebuild.js';
import { imagetools } from 'vite-imagetools';
import svg from '@poppanator/sveltekit-svg';
import path from 'path';

const config: UserConfig = {
	plugins: [imagetools(), sveltekit(), svg()],
	// define: {
	// 	__pages__: pages
	// },
	resolve: {
		alias: {
			'@images': path.resolve('./src/lib/images')
		}
	}
};

export default config;
