import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  trailingSlash: 'always',
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.BASE_PATH || ''
    }
  }
};
