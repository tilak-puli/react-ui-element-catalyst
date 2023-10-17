import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import ts from 'rollup-plugin-ts';

const PLUGINS = [
  ts(),
  resolve(),
  babel({
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  commonjs(),
];

export default [
  {
    input: 'src/index.tsx',
    external: ['react', 'prop-types'],
    output: [
      {file: 'dist/ui-element.js', format: 'cjs'},
      {file: 'dist/ui-element.esm.js', format: 'es'},
    ],
    plugins: PLUGINS,
  },
  // UMD build with inline PropTypes
  {
    input: 'src/index.tsx',
    external: ['react'],
    output: [
      {
        name: 'ReactStripe',
        file: 'dist/ui-element.umd.js',
        format: 'umd',
        globals: {
          react: 'React',
        },
      },
    ],
    plugins: PLUGINS,
  },
  // Minified UMD Build without PropTypes
  {
    input: 'src/index.tsx',
    external: ['react'],
    output: [
      {
        name: 'ReactStripe',
        file: 'dist/ui-element.umd.min.js',
        format: 'umd',
        globals: {
          react: 'React',
        },
      },
    ],
    plugins: [...PLUGINS],
  },
];
