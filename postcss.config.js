const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssPlugin = require('postcss-plugin');
const postcssAssets = require('postcss-assets');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano,
    postcssPresetEnv,
    postcssImport,
    postcssPlugin,
    postcssAssets,
    tailwindcss
  ]
}
