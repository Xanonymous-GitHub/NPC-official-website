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
      <div class="main-title">
        {{ mainTitle.line1 }}
        <br/>
        {{ mainTitle.line2 }}
        <br/>
        {{ mainTitle.line3 }}
      </div>
      <h1 class="main-title main-title__chinese">
        <svg class="logo logo__npc" viewBox="0 0 10 10">
          <use xlink:href="#npc_logo.svg"/>
        </svg>
        {{ mainTitleChinese }}
      </h1>
      <h2 class="main-title main-title__sub-title">
        {{ subTitle.line1 }}
      </h2>
      <div class="top-picture-box">
        <svg>
          <use xlink:href="#programmer.svg"/>
        </svg>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import '@/assets/images/programmer.svg';
import '@/assets/images/npc_logo.svg';
import '@/assets/scss/pages/home.scss';

export default defineComponent({
  name: "Home",
  props: {},
  components: {
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
        line1: "由一群熱愛程式設計的學生所組成的社團。",
      },
      mainDescription: {
        line1: "我們致力於推廣資訊教育，讓彼此體驗程式的美好。",
        line2: "想學學校不會教的東西嗎? 或是從小練就一身演算法功力，卻沒舞台發揮？ 甚至是寫個 App，讓全校使用?",
        line3: "讓我們一起報名資訊競賽，一起參加資訊年會，一起寫程式吧！",
        line4: "我們每學期皆會開辦社課及社聚，也會舉辦社遊、跨校交流、黑客松等各式各樣的精彩活動。",
        line5: "萬事俱備，只剩入社，心動不如馬上行動，現在就加入我們吧！"
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
