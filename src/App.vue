<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="rootKey"/>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import "@/assets/scss/app.scss";
import {defineComponent, onMounted} from "vue";

export default defineComponent({
  name: "App",
  props: {},

  setup() {
    let rootKey = 0

    // eslint-disable-next-line @typescript-eslint/ban-types
    function debounce(func: Function, delay = 50) {
      let timer: number;
      return () => {
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
          func(args);
        }, delay)
      }
    }

    function onOrientationchange() {
      rootKey++;
      window.location.reload()
    }

    onMounted(() => {
      window.addEventListener("orientationchange" in window ? "orientationchange" : "resize", debounce(onOrientationchange), true);
      document.dispatchEvent(new Event('app-rendered'));
    })

    return {rootKey}
  }
});
</script>
