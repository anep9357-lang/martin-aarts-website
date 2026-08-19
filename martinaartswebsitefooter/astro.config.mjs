import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.martinaarts.xyz',
  compressHTML: true,
  integrations: [sitemap()],
});
