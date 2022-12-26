import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			precompress: true,
			fallback: null
		}),
		paths: {
			base: dev ? '' : '/promptpay-builder'
		},
		appDir: 'internal'
	}
}

export default config
