import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://standardmethodgroup.com',
  // The call-coverage URL stays live for earlier outreach but is a transition page, so it is kept out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/never-miss-a-call') })],
});
