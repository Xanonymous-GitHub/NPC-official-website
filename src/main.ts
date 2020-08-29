import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line
// @ts-ignore
import animated from 'animate.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faDatabase, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret, faDatabase, faSpinner)

const app = createApp(App)

app.component('Icon', FontAwesomeIcon)

app
  .use(store)
  .use(router)
  .use(animated)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#app')
})
