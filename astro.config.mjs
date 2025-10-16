import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import svelte from "@astrojs/svelte";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
// 
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // adapter: node({
  //   mode: 'standalone'
  // }),
  adapter: node({ mode: "standalone" }),
  devToolbar: {
    enabled: false
  },
  server: {
    port: 3000
  },
  integrations: [svelte(), mdx()],
  vite: {
    	plugins: [
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/paraglide",
		}),
	],
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis',
          window: 'globalThis'
        }
      }
    },
    server: {
      port: 5000,
      proxy: {
        '/api': 'http://localhost:4000'
      }
    }
  }
});