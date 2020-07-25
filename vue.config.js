/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const renderRoutes = (() => {
  const routes = [
    '/',
  ].map((route) => route.replace(/\/$/, ''))
  routes.push(...routes.map((route) => `${route}/`))
  return routes
})()

const obfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 1,
  debugProtection: true,
  debugProtectionInterval: true,
  disableConsoleOutput: true,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  renameGlobals: false,
  rotateStringArray: true,
  selfDefending: true,
  shuffleStringArray: true,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 5,
  stringArray: true,
  stringArrayEncoding: 'rc4',
  stringArrayThreshold: 1,
  transformObjectKeys: true,
  unicodeEscapeSequence: false
}

module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      template: 'public/index.html',
      filename: 'index.html',
      title: "NPC 北科程式設計研究社",
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },

  pluginOptions: {
    prerenderSpa: {
      renderRoutes,
      onlyProduction: true,
      registry: undefined,
      useRenderEvent: true,
      headless: true
    }
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, "dist")],
          enforce: 'post',
          use: {loader: 'obfuscator-loader', options: obfuscatorOptions}
        },
      ]
    }
  }
}
