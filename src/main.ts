import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line
// @ts-ignore
import animated from 'animate.css'

const app = createApp(App)


app
  .use(store)
  .use(router)
  .use(animated)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#app')
})
