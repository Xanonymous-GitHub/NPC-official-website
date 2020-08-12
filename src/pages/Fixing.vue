<template>
  <main id="fixing" class="page-container">
    <div class="website-fixing-svg">
      <Logo/>
      <RotatingIcon/>
      <div class="website-fixing-svg__message--small">
        Upgrading Website
      </div>
      <div class="website-fixing-svg__message">
        Coming Soon
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import Logo from '@/components/fixing/logo.vue';
  import RotatingIcon from '@/components/fixing/RotatingIcon.vue'
  import "@/assets/scss/pages/fixing.scss";

  export default defineComponent({
    name: 'Fixing',
    components: {
      Logo,
      RotatingIcon
    },
  });
</script>
