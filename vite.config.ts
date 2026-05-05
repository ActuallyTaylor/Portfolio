import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit()
	],
	server: {
		allowedHosts: [
			'actuallytaylor.com',
			'localhost:5173',
			'devserver-develop--actuallytaylor.netlify.app'
		]
	}
};

export default config;
