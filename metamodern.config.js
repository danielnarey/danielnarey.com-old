import pkg from './package.json';


const typefaces = Object.keys(pkg.dependencies).filter(
  (str) => str.startsWith('typeface-'),
);


const assets = typefaces.map((name) => [
  `node_modules/${name}/files`,
  'files',
]);


const designSystemConfig = {
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


const metamodernConfig = {
  assets,
  designSystemConfig,
  postcss,
};


export default metamodernConfig;
