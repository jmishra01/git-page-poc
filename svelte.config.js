import adapter from '@sveltejs/adapter-static';
from {vitPreprocess} from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: viteProcess(),
	kit: {
		adapter: adapter(),
    pages: 'build',
    assets: 'build',
    fallback: null,
    precompress: false,
    strict: true,
    paths: {
      base: dev ? '' : '/git-page-poc',
    },
	}
};

export default config;
