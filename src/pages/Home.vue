<template>
  <main class="page-container" id="home">
    <div class="first-area">
      <div id="main-logo-container">
        <MainLogo/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MainLogo from "@/components/home/MainLogo.vue";

import '@/assets/scss/pages/home.scss'

export default defineComponent({
  name: "Home",
  props: {},
  components: {
    MainLogo
  },
  setup() {
    return;
  }
});
</script>
