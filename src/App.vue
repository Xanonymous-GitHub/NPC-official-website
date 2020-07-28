<template>
  <keep-alive>
    <router-view/>
  </keep-alive>
</template>

<script lang="ts">
  import "@/assets/scss/app.scss";
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "App",
    props: {},
    setup() {
      return {};
    }
  });
</script>
