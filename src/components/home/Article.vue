<template>
  <div :style="{backgroundColor:bgColor || 'rgba(245, 245, 247, 1)', color:textColor || 'black'}" class="article-block">
    <div class="ribbon ribbon-top-right" v-if="badge"><span :style="{backgroundColor:badgeBg||null}">{{ badge }}</span>
    </div>
    <div class="title">
      {{ title }}
      <div class="divider"/>
    </div>
    <div :style="{flexWrap:pictureFlexWrap || null}" class="content">
      <div class="article-picture">
        <slot name="picture"></slot>
      </div>
      <div class="text-content">
        <slot name="textContent"></slot>

        <ExternalLink :to="buttonLink" class="button"
            rel="noreferrer noopener"
            v-if="button">
          <svg class="bottom-icon bottom-icon__white" viewBox="0 0 1 1">
            <use xlink:href="#arrow-right-solid.svg"/>
          </svg>
          {{ button }}
        </ExternalLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import '@/assets/scss/pages/home-area/_article-block.scss';
import '@/assets/images/arrow-right-solid.svg'
import ExternalLink from "@/components/App/ExternalLink.vue";

export default defineComponent({
  name: "Article",
  components:{
    ExternalLink
  },
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
    },
    pictureFlexWrap: {
      type: String
    }
  },
  setup() {
    onMounted(() => {
      const joinUsButton = document.getElementById('join-us') as HTMLLinkElement
      const joinUsArticle = document.getElementById('join-us-article') as HTMLDivElement
      joinUsButton.addEventListener('click', function (e) {
        e.preventDefault();
        joinUsArticle.scrollIntoView({
          behavior: 'smooth'
        })
      });
    });
    return
  }
});
</script>
