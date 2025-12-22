// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Lyle Zucker',
			social: [{
				icon: "linkedin",
				label: "LinkedIn",
				href: "https://www.linkedin.com/in/lylez/",
			  },
			  {
				icon: "github",
				label: "GitHub",
				href: "https://github.com/lyerdev",
			  },
			],
		}),
	]
}),