import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
			pages: "docs",
            assets: "docs"
		}),
		paths: {
			base: ''
		}
	}
};

export default config;