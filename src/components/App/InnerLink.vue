<template>
  <div>
    <router-link :to="to" rel="noreferrer noopener">
      <slot></slot>
    </router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "InnerLink",
  props: {
    to: {
      required: true,
      type: String
    }
  }
});
</script>
