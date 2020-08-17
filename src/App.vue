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
    const onOrientationchange = () => {
      rootKey++;
    }

    onMounted(() => {
      window.addEventListener("orientationchange" in window ? "orientationchange" : "resize", onOrientationchange, true);
      document.dispatchEvent(new Event('app-rendered'));
    })

    return {rootKey}
  }
});
</script>
