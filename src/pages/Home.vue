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
          <router-link class="info-area__button info-area__button--red animate__animated animate__bounceIn" rel="noreferrer noopener"
                       to="/">
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
    <Article title="【活動】NPC 新生茶會">
      <template #picture>
        <use xlink:href="#tea.svg"/>
      </template>
      <template #textContent>
        對程式設計有興趣卻不知道在哪裡學？
        想與其他同好交流但是怕自己不夠厲害？
        程式上遇到問題卻沒有辦法解決？
        那你絕對要來參加程式設計研究社的新生茶會！
        <br/><br/>
        在 NPC 新生茶會介紹社團的精彩活動內容，
        還有有趣的解謎遊戲讓你和組員一起體驗程式設計的美好！
        提前報名的話還能領取美味的零食哦！
        <br/><br/>
        時間：9/22(二) 晚上 18:30
        <br/>
        地點：綜合科館 B1 第三演講廳
      </template>
    </Article>
    <slot name="footer"></slot>
  </main>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent, onMounted} from 'vue';
import '@/assets/images/programmer.svg';
import '@/assets/images/npc_logo_Hans_Chiu.svg';
import '@/assets/scss/pages/home.scss';
import '@/assets/images/process.svg';
import '@/assets/images/tea.svg';
import '@/assets/images/facebook-messenger-brands.svg'
import '@/assets/images/user-plus-solid.svg'

export default defineComponent({
  name: "Home",
  props: {},
  components: {
    Article: defineAsyncComponent(() => import('@/components/home/Article.vue')),
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
