import sveltePreprocess from 'svelte-preprocess';
import markdown from '@jackfranklin/rollup-plugin-markdown';
import sugarss from 'sugarss';
import tailwindcss from 'tailwindcss';
import designSystem from '@metamodern/design-system';



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
};


export default config;
