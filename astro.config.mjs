// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://lyerdev.github.io',
	base: '/content/docs/index.mdx',
	integrations: [
		starlight({
			title: 'Lyle Zucker',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'}, {icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/lylez/'}]
		}),
	],
});
