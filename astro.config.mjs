import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [tailwind()],
	site: 'https://leoncodes.com',
	output: 'static',
	build: {
		assets: 'assets'
	},
	trailingSlash: 'always' // Forcer les slashes à la fin des URLs
});
