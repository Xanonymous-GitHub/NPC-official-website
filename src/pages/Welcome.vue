<template>
  <main class="page-container" id="welcome">
    welcome
  </main>
  <slot name="footer"></slot>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/assets/scss/pages/welcome.scss'

export default defineComponent({
  name: "Welcome"
});
</script>
