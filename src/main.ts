import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.scss'

// eslint-disable-next-line
// @ts-ignore
const app = createApp(App)

app
  .use(store)
  .use(router)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#app')
})
