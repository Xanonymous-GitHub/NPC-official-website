<template>
  <div :style="{background:bgColor || 'rgba(245, 245, 247, 1)', color:textColor || 'black'}" class="article-block">
    <div v-if="badge" class="ribbon ribbon-top-right"><span :style="{backgroundColor:badgeBg||null}">{{ badge }}</span>
    </div>
    <div class="title">
      {{ title }}
      <div class="divider"/>
    </div>
    <div :style="{flexWrap:pictureFlexWrap || null, flexDirection:pictureFlexDirection || null}" class="content">
      <div :style="{maxWidth:pictureWidth || null, maxHeight:pictureHeight || null}" class="article-picture">
        <slot name="picture"></slot>
      </div>
      <div class="text-content">
        <slot name="textContent"></slot>

        <ExternalLink v-if="button" :to="buttonLink"
                      class="button"
                      rel="noreferrer noopener">
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
import {scrollToId} from "@/utils/scroll";

export default defineComponent({
  name: "Article",
  components: {
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
    },
    pictureFlexDirection: {
      type: String
    },
    pictureWidth: {
      type: String
    },
    pictureHeight: {
      type: String
    }
  },
  setup() {
    onMounted(() => {
      const joinUsButton = document.getElementById('join-us') as HTMLLinkElement
      joinUsButton.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToId(document.querySelector('#app') as HTMLBodyElement, 'join-us-article', 300)
      });
    });
    return
  }
});
</script>
