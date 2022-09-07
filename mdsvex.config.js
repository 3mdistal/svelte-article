import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    quotes: true,
    dashes: true,
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
