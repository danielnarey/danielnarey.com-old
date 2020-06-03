import sveltePreprocess from 'svelte-preprocess';
import pugFilterMarkdown from '@metamodern/pug-filter-markdown';
import sugarss from 'sugarss';
import postcssEasyImport from 'postcss-easy-import';
import tailwindcss from 'tailwindcss';
import designSystem from '@metamodern/design-system';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import copyTypefaces from '@metamodern/copy-typefaces';


const browsers = '> 1.5% in US, Firefox ESR, not ie <= 11, not dead';


const config = ({
  development = false,
} = {}) => ({
  browsers,
  sveltePreprocess: sveltePreprocess({
    pug: {
      filters: { md: pugFilterMarkdown },
    },
    postcss: {
      parser: sugarss,
      plugins: [].concat(
        postcssEasyImport(),
        tailwindcss(designSystem({ rotation: -15 })),
        development ? [] : postcssPresetEnv({ browsers }),
        development ? [] : cssnano({ preset: 'default' }),
      ),
    },
  }),
  onRender: (context, options) => copyTypefaces(context, options),
});


export default config;
