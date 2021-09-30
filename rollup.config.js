import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import url from '@rollup/plugin-url';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.(tsx|ts)'],
    }),
    url({ limit: Infinity, exclude: ['**/*.png '] }),
    svgr({
      svgoConfig: {
        plugins: {
          removeViewBox: false,
        },
      },
    }),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      sourceMap: true,
      plugins: [postcssImport()],
    }),
  ],
};

export default config;
