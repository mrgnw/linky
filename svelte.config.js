import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		alias: {
			$components: './src/components',
		},
		adapter: adapter(
			{
				pages: 'build',
				assets: 'build',
				fallback: 'index.html',
				precompress: true,
				strict: true,
				routes: {
					include: ['/*'],
					exclude: ['<all>']
				}
			}
		),
	},

	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
