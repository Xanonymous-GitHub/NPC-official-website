<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
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
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    });
    return {};
  }
});
</script>
