/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CompressionWebpackPlugin = require("compression-webpack-plugin");
// const zopfli = require("@gfx/zopfli");
// const BrotliPlugin = require("brotli-webpack-plugin");
const PrerenderSpaPlugin = require("prerender-spa-plugin");
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssPlugin = require('postcss-plugin');
const postcssAssets = require('postcss-assets');
// const productionGzipExtensions = /\.(js|css|json|txt|html)(\?.*)?$/i;
const isProduction = process.env.NODE_ENV === 'production'
const needBundleAnalysis = process.argv.includes('--analyze')
const resolve = dir => path.join(__dirname, dir);
const renderRoutes = (() => {
  const routes = [
    '/',
    '/welcome'
    // '/dashboard',
    // '/login',
    // '/registration',
    // '/admin',
    // '/fixing'
  ].map((route) => route.replace(/\/$/, ''))
  routes.push(...routes.map((route) => `${route}/`))
  return routes
})()

module.exports = {
  chainWebpack: config => {
    if (isProduction && needBundleAnalysis) {
      config.plugin('analyzer').use(new BundleAnalyzerPlugin())
    }
    config.performance
      .maxEntrypointSize(1000000)
      .maxAssetSize(1000000)
    // config.plugin('optimize-css').tap(([options]) => {
    //   options.cssnanoOptions.preset[1].svgo = false
    //   return [options]
    // })
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include
      .add(resolve("src/assets/images"))
      .add(resolve("src/articles/articleResources"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({symbolId: "[name].svg"})
  },

  configureWebpack: config => {
    const plugins = [];
    if (isProduction) {
      // plugins.push(
      //   new CompressionWebpackPlugin({
      //     algorithm(input, compressionOptions, callback) {
      //       return zopfli.gzip(input, compressionOptions, callback);
      //     },
      //     compressionOptions: {
      //       numiterations: 15
      //     },
      //     minRatio: 0.99,
      //     test: productionGzipExtensions
      //   })
      // );
      // plugins.push(
      //   new BrotliPlugin({
      //     test: productionGzipExtensions,
      //     minRatio: 0.99
      //   })
      // );
      plugins.push(
        new PrerenderSpaPlugin({
          staticDir: resolve("dist"),
          routes: renderRoutes,
          registry: undefined,
          useRenderEvent: true,
          onlyProduction: true,
          postProcess(renderedRoute) {
            renderedRoute.route = renderedRoute.originalRoute
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
            }
            return renderedRoute
          },
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true
          },
          renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
            renderAfterDocumentEvent: "app-rendered",
            maxConcurrentRoutes: 20,
            headless: true,
          })
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins];
  },

  pages: {
    index: {
      entry: "src/main.ts",
      template: 'public/index.html',
      filename: 'index.html',
      title: "NPC 北科程式設計研究社",
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  productionSourceMap: false,

  css: {
    sourceMap: false,
    loaderOptions: {
      postcss: {
        map: false,
        plugins: [
          autoprefixer,
          cssnano,
          postcssPresetEnv,
          postcssImport,
          postcssPlugin,
          postcssAssets
        ]
      },
    }
  },

  lintOnSave: process.env.NODE_ENV === 'development',

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/welcome'
        // '/dashboard',
        // '/login',
        // '/registration',
        // '/admin',
        // '/fixing'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
