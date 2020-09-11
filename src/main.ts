import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line
// @ts-ignore
import animated from 'animate.css'
import ExternalLink from '@/components/App/ExternalLink.vue'
import InnerLink from '@/components/App/InnerLink.vue'

const app = createApp(App)

app.component('go', ExternalLink)
app.component('to', InnerLink)

app
  .use(store)
  .use(router)
  .use(animated)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#app')
})
