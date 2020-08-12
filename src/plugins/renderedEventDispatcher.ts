// import {provide, inject} from 'vue'
//
// export const RenderedEventDispatcher = {
//   install(app: object): void {
//     app.$prototype.$dispatchRenderedEvent = function () {
//       document.dispatchEvent(new Event('app-rendered'))
//     }
//   }
// }
//
// export function provideRenderedEventDispatcher(): void {
//   provide('dispatchRenderedEvent', () => {
//     document.dispatchEvent(new Event('app-rendered'))
//   })
// }
//
// export function useRenderedEventDispatcher(): (() => void) {
//   const dispatchRenderedEvent = inject<(() => void)>('dispatchRenderedEvent')
//   if (!dispatchRenderedEvent) {
//     throw new Error('RenderedEventDispatcher is not provided')
//   }
//   return dispatchRenderedEvent
// }
