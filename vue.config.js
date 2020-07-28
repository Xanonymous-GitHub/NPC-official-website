/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");
const BrotliPlugin = require("brotli-webpack-plugin");
const PrerenderSpaPlugin = require("prerender-spa-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html)(\?.*)?$/i;
const isProduction = process.env.NODE_ENV === 'production'
const needBundleAnalysis = process.argv.includes('--analyze')
const resolve = dir => path.join(__dirname, dir);
const renderRoutes = (() => {
  const routes = [
    '/',
  ].map((route) => route.replace(/\/$/, ''))
  routes.push(...routes.map((route) => `${route}/`))
  return routes
})()

module.exports = {
  chainWebpack: config => {
    if (isProduction && needBundleAnalysis) {
      config.plugin('analyzer').use(new BundleAnalyzerPlugin())
    }
  },
  configureWebpack: config => {
    const plugins = [];
    if (isProduction) {
      plugins.push(
        new CompressionWebpackPlugin({
          algorithm(input, compressionOptions, callback) {
            return zopfli.gzip(input, compressionOptions, callback);
          },
          compressionOptions: {
            numiterations: 15
          },
          minRatio: 0.99,
          test: productionGzipExtensions
        })
      );
      plugins.push(
        new BrotliPlugin({
          test: productionGzipExtensions,
          minRatio: 0.99
        })
      );
      plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 0,
          minRatio: 0.99
        })
      );
      new PrerenderSpaPlugin({
        staticDir: resolve("dist"),
        renderRoutes,
        postProcess(ctx) {
          ctx.route = ctx.originalRoute;
          ctx.html = ctx.html.split(/>[\s]+</gim).join("><");
          if (ctx.route.endsWith(".html")) {
            ctx.outputPath = path.join(__dirname, "dist", ctx.route);
          }
          return ctx;
        },
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true
        },
        renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
          inject: {},
          headless: false,
          renderAfterDocumentEvent: "render-event"
        })
      });
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
  lintOnSave: process.env.NODE_ENV === 'development',
}
