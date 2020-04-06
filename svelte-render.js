const designSystem = require('@metamodern/design-system');
const markdown = require('@jackfranklin/rollup-plugin-markdown');
const rollup = require('rollup');
const sugarss = require('sugarss');
const svelte = require('rollup-plugin-svelte');
const sveltePreprocess = require('svelte-preprocess');
const tailwindcss = require('tailwindcss');


const designSystemConfig = {
  rotation: -15,
};


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


module.exports = svelteRender;
