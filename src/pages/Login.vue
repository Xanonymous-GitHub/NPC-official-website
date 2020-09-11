<template>
  <main class="page-container" id="login">
  </main>
  <slot name="footer"></slot>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/assets/scss/pages/login.scss';

export default defineComponent({
  name: "Login"
});
</script>

<style scoped>

</style>
