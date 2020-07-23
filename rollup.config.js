import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/functions/fetch-data.js',
    output: [
      { file: 'lambda/fetch-data.js', format: 'cjs' },
    ],
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      terser(),
    ],
    external: [
      'http',
      'https',
      'url',
    ]
  },
];
