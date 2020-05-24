import path from 'path';

import sveltePreprocess from 'svelte-preprocess';
import markdown from '@jackfranklin/rollup-plugin-markdown';
import sugarss from 'sugarss';
import tailwindcss from 'tailwindcss';
import designSystem from '@metamodern/design-system';
import copyTypefaces from '@metamodern/copy-typefaces';


const config = {
  sveltePreprocess: sveltePreprocess({ 
    postcss: {
      parser: sugarss,
      plugins: [
        tailwindcss(designSystem({ rotation: -15 })),
      ],
    },
  }),
  rollupInputPlugins: [
    markdown(),
  ],
  onRender: () => copyTypefaces(path.resolve(__dirname)),
};


export default config;
