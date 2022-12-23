import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import svg from '@poppanator/sveltekit-svg';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit(), imagetools(), svg()],
	server: {
		port: 3333,
		strictPort: false
	},
	preview: {
		port: 4444,
		strictPort: false
	},
	resolve: {
		alias: {
			'@images': path.resolve('./src/lib/images')
		}
	}
};

export default config;
