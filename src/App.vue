<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import "@/assets/scss/app.scss";
import {defineComponent, onMounted, onBeforeUnmount} from "vue";
import {debounce} from 'lodash'

export default defineComponent({
  name: "App",
  props: {},

  setup() {
    const onOrientationchange = debounce(() => {
      window.location.reload()
    }, 250)

    onMounted(() => {
      window.addEventListener("orientationchange", onOrientationchange, false);
      document.dispatchEvent(new Event('app-rendered'));
    })

    onBeforeUnmount(() => {
      window.removeEventListener("orientationchange", onOrientationchange, false)
    })

    return {}
  }
});
</script>
