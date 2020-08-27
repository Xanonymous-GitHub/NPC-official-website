<template>
  <div class="article-block">
    <div class="title">
      {{ title }}
      <div class="divider"/>
    </div>
    <div class="content">
      <div class="article-picture animate__animated animate__bounceIn">
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1 1">
          <slot name="picture"></slot>
        </svg>
      </div>
      <div class="text-content">
        <slot name="textContent"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/assets/scss/pages/area/_article-block.scss';

export default defineComponent({
  name: "Article",
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>
