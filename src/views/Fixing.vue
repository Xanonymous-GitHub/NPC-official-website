<template>
  <div class="website-fixing-svg">
    <Logo/>
    <RotatingIcon/>
    <div>
      Upgrading Website
    </div>
    <div class="website-fixing-svg__message">
      Coming Soon
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import Logo from '@/components/logo.vue';
  import RotatingIcon from '@/components/RotatingIcon.vue'

  export default defineComponent({
    name: 'Fixing',
    components: {
      Logo,
      RotatingIcon
    },
  });
</script>

<style lang="scss" scoped>
  @import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap");

  * {
    font-family: Quicksand, Quicksand, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-weight: bolder;
  }

  .website-fixing-svg {
    position: relative;
    height: 40rem;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    @at-root &__message {
      height: min-content;
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
      padding-bottom: 3rem;
    }
  }
</style>
