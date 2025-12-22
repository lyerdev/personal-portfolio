// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import '/src/custom.css';

// https://astro.build/config
export default defineConfig({
	site: 'https://lyerdev.github.io/personal-portfolio',
	base: 'personal-portfolio/src/content/docs/index.mdx',
	integrations: [
		starlight({
			title: 'Lyle Zucker',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'},
					 {icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/lylez/'},
					 {icon: 'email', label: 'Email', href: 'mailto:lyle.jz404@gmail.com'}]
					 ,
		}),
	],
});
