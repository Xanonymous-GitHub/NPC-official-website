<template>
  <div :style="{backgroundColor:bgColor || 'rgba(245, 245, 247, 1)', color:textColor || 'black'}" class="article-block">
    <div class="ribbon ribbon-top-right" v-if="badge"><span :style="{backgroundColor:badgeBg||null}">{{ badge }}</span></div>
    <div class="title">
      {{ title }}
      <div class="divider"/>
    </div>
    <div class="content">
      <div class="article-picture animate__animated animate__bounceIn">
        <slot name="picture"></slot>
      </div>
      <div class="text-content">
        <slot name="textContent"></slot>

        <go :to="buttonLink" class="button animate__animated animate__bounceIn"
            rel="noreferrer noopener"
            v-if="button">
          <svg class="bottom-icon bottom-icon__white" viewBox="0 0 1 1">
            <use xlink:href="#arrow-right-solid.svg"/>
          </svg>
          {{ button }}
        </go>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/assets/scss/pages/home-area/_article-block.scss';
import '@/articles/articleResources/arrow-right-solid.svg'

export default defineComponent({
  name: "Article",
  props: {
    title: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
    },
    textColor: {
      type: String
    },
    badge: {
      type: String
    },
    badgeBg: {
      type: String
    },
    button: {
      type: String
    },
    buttonLink: {
      type: String
    }
  }
});
</script>
