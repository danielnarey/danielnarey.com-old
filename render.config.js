import sveltePreprocess from 'svelte-preprocess';
import markdownIt from 'markdown-it';
import sugarss from 'sugarss';
import postcssEasyImport from 'postcss-easy-import';
import tailwindcss from 'tailwindcss';
import designSystem from '@metamodern/design-system';
import presetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import copyTypefaces from '@metamodern/copy-typefaces';


const markdown = (content, {
  linkify = true,
  typographer = true,
  inline = false,
  ...options
}) => {
  const md = markdownIt({ linkify, typographer, ...options });
  const html = inline ? md.renderInline(content) : md.render(content);
  
  if (options.tag || options.class || options.attrs) {
    const tag = options.tag || 'div';
    const classAttr = options.class ? ` class="${options.class}"` : '';
    const otherAttrs = options.attrs ? ` ${options.attrs}` : '';
    return `<${tag}${classAttr}${otherAttrs}>${html}</${tag}>`
  }
  
  return html;
};

const config = {
  sveltePreprocess: sveltePreprocess({
    pug: {
      filters: { markdown },
    },
    postcss: {
      parser: sugarss,
      plugins: [
        postcssEasyImport({ extensions: ['.css', '.sss'] }),
        tailwindcss(designSystem({ rotation: -15 })),
        presetEnv({
          browsers: '> 1.5% in US, Firefox ESR, not ie <= 11, not dead',
        }),
        cssnano({ preset: 'default' }),
      ],
    },
  }),
  onRender: (context, options) => copyTypefaces(context, options),
};


export default config;
