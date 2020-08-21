<template>
  <main class="page-container" id="home">
    <div class="first-area">
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
            <svg class="logo logo__npc" viewBox="0 0 10 10">
              <use xlink:href="#npc_logo.svg"/>
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
          <router-link class="info-area__button info-area__button--red animate__animated animate__bounceIn" to="/">加入我們
          </router-link>
          <router-link class="info-area__button info-area__button--white animate__animated animate__bounceIn" to="/">
            線上聊天
          </router-link>
        </div>
      </div>
      <div class="top-picture-box animate__animated animate__fadeIn">
        <svg>
          <use xlink:href="#programmer.svg"/>
        </svg>
      </div>
    </div>
    <Article title="About us 關於我們">
      <template #picture>
        <use xlink:href="#process.svg"/>
      </template>
      <template #textContent>
        為了使更多人能夠體會程式的魅力，我們致力於北科校園推廣資訊技術，開設不同語言的課程，讓彼此體驗程式的美好。
        <br/><br/>
        我們每學期皆會開辦社課及社聚，也會舉辦社遊、跨校交流、黑客松等各式各樣的精彩活動。
        <br/><br/>
        不僅如此，更加開基礎課程，讓初學者能夠更快速地上手。
        <br/><br/>
        同時，我們也有讀書會分組形式的社課，讓社員能夠團隊合作，並在最後進入專案的開發。
        <br/><br/>
        想學學校不會教的技術嗎？或是從小練就一身演算法功力，卻沒舞台發揮？甚至是寫個 App，讓全校使用？
        <br/><br/>
        讓我們一起報名資訊競賽，一起參加資訊年會，一起寫程式！
        <br/><br/>
        對程式有興趣的你，趕快加入我們的夢想藍圖吧！
      </template>
    </Article>
    <div class="footer">
      <div class="copyright">
        Copyright <b style="font-family: sans-serif">&copy;</b> 2020 by NTUT Programming Club
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import '@/assets/images/programmer.svg';
import '@/assets/images/npc_logo.svg';
import '@/assets/scss/pages/home.scss';
import '@/assets/images/process.svg';
import Article from '@/components/home/article.vue';
// import MainLogo from '@/components/home/MainLogo.vue';

export default defineComponent({
  name: "Home",
  props: {},
  components: {
    Article
    // MainLogo
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
