<template>
  <main class="page-container" id="home">
    <div class="first-area">
      <div class="clip-area">
        <div id="main-logo-container">
          <MainLogo/>
        </div>
      </div>
      <div class="main-title">
        {{ mainTitle.line1 }}
        <br/>
        {{ mainTitle.line2 }}
        <br/>
        {{ mainTitle.line3 }}
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
  data() {
    return {
      mainTitle: {
        line1: "NTUT",
        line2: "Programming",
        line3: "Club"
      }
    }
  },
  setup() {
    return;
  }
});
</script>
