<template>
  <main class="page-container" id="fixing">
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
import {defineComponent, onMounted} from 'vue';
import Logo from '@/components/fixing/logo.vue';
import RotatingIcon from '@/components/fixing/RotatingIcon.vue'
import "@/assets/scss/pages/fixing.scss";

export default defineComponent({
  name: 'Fixing',
  components: {
    Logo,
    RotatingIcon
  },
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    });
    return;
  }
});
</script>
