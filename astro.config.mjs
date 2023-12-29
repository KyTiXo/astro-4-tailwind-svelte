import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		tailwind({
			// Example: Disable injecting a basic `base.css` import on every page.
			// Useful if you need to define and/or import your own custom `base.css`.
			applyBaseStyles: false,
		}),
	],
});
