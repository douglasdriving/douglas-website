// @ts-check
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://douglasdriving.github.io',
  base: '/douglas-website',
  integrations: [markdoc()],
});
