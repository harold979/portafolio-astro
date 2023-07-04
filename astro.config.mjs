import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), react(), image()],
	jsx: {
		factory: 'React.createElement',
		fragment: 'React.Fragment',
		// Agrega cualquier otra configuración de JSX si es necesario
	},
});
