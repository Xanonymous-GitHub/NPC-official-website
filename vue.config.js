const renderRoutes = (() => {
  const routes = [
    '/',
  ].map((route) => route.replace(/\/$/, ''))
  routes.push(...routes.map((route) => `${route}/`))
  return routes
})()

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
  }
}
