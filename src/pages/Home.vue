<template>
  <main class="page-container" id="home">
    <div class="first-area">
      <slot name="nav"></slot>
      <div class="clip-area">
        <svg class="waves" preserveAspectRatio="none" shape-rendering="auto"
             viewBox="0 24 150 28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" id="gentle-wave"/>
          </defs>
          <g class="parallax">
            <use fill="rgba(255,255,255,0.7" x="48" xlink:href="#gentle-wave" y="0"/>
            <use fill="rgba(255,255,255,0.5)" x="48" xlink:href="#gentle-wave" y="3"/>
            <use fill="rgba(255,255,255,0.3)" x="48" xlink:href="#gentle-wave" y="5"/>
            <use fill="#fff" x="48" xlink:href="#gentle-wave" y="7"/>
          </g>
        </svg>
      </div>
      <div class="main-title animate__animated animate__fadeInLeft animate__lightSpeedInLeft">
        {{ mainTitle.line1 }}
        <br/>
        {{ mainTitle.line2 }}
        <br/>
        {{ mainTitle.line3 }}
      </div>
      <div class="info-area">
        <div class="info-area__text">
          <h1 class="main-title main-title__chinese animate__animated animate__fadeIn">
            <svg class="logo logo__npc" viewBox="0 0 1 1">
              <use xlink:href="#npc_logo_Hans_Chiu.svg"/>
            </svg>
            {{ mainTitleChinese }}
          </h1>
          <h2 class="main-title main-title__sub-title animate__animated animate__fadeIn">
            {{ subTitle.line1 }}
            <br/>
            {{ subTitle.line2 }}
          </h2>
        </div>
        <div class="info-area__button--container">
          <router-link class="info-area__button info-area__button--red animate__animated animate__bounceIn"
                       id="join-us"
                       rel="noreferrer noopener" to="/">
            <svg class="bottom-icon bottom-icon__white" viewBox="0 0 1 1">
              <use xlink:href="#user-plus-solid.svg"/>
            </svg>
            加入我們
          </router-link>
          <go class="info-area__button info-area__button--white animate__animated animate__bounceIn"
              rel="noreferrer noopener" to="https://m.me/NPC.OwO">
            <svg class="bottom-icon bottom-icon__blue" viewBox="0 0 1 1">
              <use xlink:href="#facebook-messenger-brands.svg"/>
            </svg>
            線上聊天
          </go>
        </div>
      </div>
      <div class="top-picture-box animate__animated animate__fadeIn">
        <svg>
          <use xlink:href="#programmer.svg"/>
        </svg>
      </div>
    </div>
    <ArticleBundle/>
    <slot name="footer"></slot>
  </main>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent, onMounted} from 'vue';
import '@/assets/images/programmer.svg';
import '@/assets/images/npc_logo_Hans_Chiu.svg';
import '@/assets/scss/pages/home.scss';
import '@/assets/images/process.svg';
import '@/assets/images/facebook-messenger-brands.svg'
import '@/assets/images/user-plus-solid.svg'

export default defineComponent({
  name: "Home",
  props: {},
  components: {
    ArticleBundle: defineAsyncComponent(() => import('@/articles/ArticleBundle.vue')),
  },
  data() {
    return {
      mainTitle: {
        line1: "NTUT",
        line2: "Programming",
        line3: "Club"
      },
      mainTitleChinese: "北科程式設計研究社",
      subTitle: {
        line1: "由一群熱愛程式設計的學生所組成的社團",
        line2: "扭轉迷思，提供許多管道給想要學習程式的你！"
      },
    }
  },
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    });
    return;
  }
});
</script>
