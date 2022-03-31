import svelte from 'rollup-plugin-svelte';
import open from 'open';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    svelte({
      // preprocess: sveltePreprocess({ postcss: true }),
      preprocess: autoPreprocess(),
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: (css) => {
        css.write('public/build/bundle.css');
      },
    }),
    typescript({ sourceMap: !production }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    !production && serve(),
    !production && livereload('public'),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('yarn', ['start', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        });
        open('http://localhost:5000');
      }
    },
  };
}
