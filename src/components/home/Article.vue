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

        <span v-if="buttons" class="flex flex-auto flex-wrap">
          <ExternalLink v-for="(button, key) in buttons" :key="key+'_article_button'" :class="'button '+button.colorClasses"
                        :to="button.link"
                        rel="noreferrer noopener">
          <svg class="bottom-icon bottom-icon__white" viewBox="0 0 1 1">
            <slot v-if="button.specialSVG" :name="button.displayText+'-svg-slot'"></slot>
            <use v-else xlink:href="#arrow-right-solid.svg"/>
          </svg>
          {{ button.displayText }}
        </ExternalLink>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType} from 'vue';
import '@/assets/scss/pages/home-area/_article-block.scss';
import '@/assets/images/arrow-right-solid.svg'
import ExternalLink from "@/components/App/ExternalLink.vue";
import {scrollToId} from "@/utils/scroll";

export interface ArticleButton {
  displayText: string
  link: string
  colorClasses: string
  specialSVG: boolean
}

export default defineComponent({
  name: "Article-Component",
  components: {
    ExternalLink
  },
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    },
    bgColor: {
      type: String as PropType<string>,
    },
    textColor: {
      type: String as PropType<string>
    },
    badge: {
      type: String as PropType<string>
    },
    badgeBg: {
      type: String as PropType<string>
    },
    buttons: {
      type: Object as PropType<Array<ArticleButton>>
    },
    pictureFlexWrap: {
      type: String as PropType<string>
    },
    pictureFlexDirection: {
      type: String as PropType<string>
    },
    pictureWidth: {
      type: String as PropType<string>
    },
    pictureHeight: {
      type: String as PropType<string>
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
