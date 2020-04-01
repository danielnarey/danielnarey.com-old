import designSystem from '@metamodern/design-system';
import sugarss from 'sugarss';
import tailwindcss from 'tailwindcss';
import markdown from '@jackfranklin/rollup-plugin-markdown';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';


const typefaces = Object.keys(pkg.dependencies).filter(
  (str) => str.startsWith('typeface-'),
);


const assets = typefaces.map((name) => [
  `node_modules/${name}/files`,
  'files',
]);


const designSystemConfig = {
  rotation: -15,
  variants: {
    borderWidth: ['responsive'],
    borderRadius: ['responsive'],
    fontSize: ['responsive'],
    lineHeight: ['responsive'],
    margin: ['responsive'],
    padding: ['responsive'],
    width: ['responsive'],
  },
};


const postcss = {
  external: typefaces,
};


const rollup = {
  rollupPlugins: [
    markdown(),
    svelte({
      css: (css) => { css.write('./src/styles/Svelte.css', false); },
      preprocess: sveltePreprocess({ 
        postcss: {
          parser: sugarss,
          plugins: [tailwindcss(designSystem(designSystemConfig))],
        },
      }),
    }),
  ],
};


const metamodernConfig = {
  assets,
  designSystemConfig,
  postcss,
  rollup,
};


export default metamodernConfig;
