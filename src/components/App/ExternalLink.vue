<template>
  <a :href="to" target="_blank" rel="noreferrer noopener">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "ExternalLink",
  props: {
    to: {
      required: true,
      type: String
    }
  }
});
</script>
