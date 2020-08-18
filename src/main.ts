import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line
// @ts-ignore
import animated from 'animate.css'
// import {RenderedEventDispatcher} from './plugins/renderedEventDispatcher'

const app = createApp(App)

app
  // .use(RenderedEventDispatcher)
  .use(store)
  .use(router)
  .use(animated)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#app')
})
