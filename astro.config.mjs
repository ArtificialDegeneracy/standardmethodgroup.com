import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When custom domain is connected, remove base and update site
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages
    ? 'https://artificialdegeneracy.github.io'
    : 'https://www.standardmethodgroup.com',
  base: isGitHubPages ? '/standardmethodgroup.com' : '/',
  integrations: [sitemap()],
});
