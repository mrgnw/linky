import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-cloudflare';
import { fileURLToPath } from 'url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
			$components: "./src/components",
			"@/*": "./src/lib/*",
			$jibs: "./src/jibs/*",
		},
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "index.html",
      precompress: true,
      strict: true,
      routes: {
        include: ["/*"],
        exclude: ["<all>"],
      },
    }),
  },

  preprocess: [preprocess({
    postcss: true,
  }), vitePreprocess({}), mdsvex()],

  extensions: [".svelte", ".svx"]
};

export default config;