declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module 'lodash.debounce';
declare module 'body-scroll-lock';
declare module 'vue-progressive-image';
