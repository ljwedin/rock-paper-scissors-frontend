import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html',
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: { entries: [] },
		paths: {
			// change below to your repo name
			base: dev ? '' : '/rock-paper-scissors-frontend'
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
