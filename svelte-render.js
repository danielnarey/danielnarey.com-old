import designSystem from '@metamodern/design-system';
import markdown from '@jackfranklin/rollup-plugin-markdown';
import rollup from 'rollup';
import sugarss from 'sugarss';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';


const plugins = [
  nodeResolve(),
  commonjs(),
  markdown(),
  svelte({
    preprocess: sveltePreprocess({ 
      postcss: {
        parser: sugarss,
        plugins: [tailwindcss(designSystem(designSystemConfig))],
      },
    }),
  }),
];


const svelteRender = async (input) => {
  const bundle = await rollup({
    input,
    plugins,
  });
  
  const code = await bundle.generate({
    format: 'es',
  });
  
  return code;
};


export default svelteRender;
