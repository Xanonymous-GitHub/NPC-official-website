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
import nyancat from "@/utils/nyancat";

export default defineComponent({
  name: "App",
  props: {},

  setup() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    function debounce(func: Function, delay = 250) {
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
      window.location.reload()
    }

    onMounted(() => {
      window.addEventListener("orientationchange", debounce(onOrientationchange), false);
      nyancat()
      document.dispatchEvent(new Event('app-rendered'));
    })

    onBeforeUnmount(() => {
      window.removeEventListener("orientationchange", debounce(onOrientationchange), false)
    })

    return {}
  }
});
</script>
