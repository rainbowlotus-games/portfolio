import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: { includePaths: ['src/scss'], prependData: '@import "vars";'},
		postcss: {
			plugins: autoprefixer
		}
	}),
	kit: {
		adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
	},
};

export default config;
