import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import svg from '@poppanator/sveltekit-svg';

const config: UserConfig = {
	plugins: [sveltekit(), imagetools(), svg()],
	server: {
		port: 3333,
		strictPort: false
	},
	preview: {
		port: 4444,
		strictPort: false
	}
};

export default config;
