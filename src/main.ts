import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import {RenderedEventDispatcher} from './plugins/renderedEventDispatcher'

const app = createApp(App)

app
  // .use(RenderedEventDispatcher)
  .use(store)
  .use(router)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#app')
})
