<template>
  <main class="page-container" id="home">
    <div class="first-area">
      <div class="clip-area">
        <div id="main-logo-container">
          <MainLogo/>
        </div>
      </div>
      <div class="main-title">
        {{ mainTitle.line1 }}
        <br/>
        {{ mainTitle.line2 }}
        <br/>
        {{ mainTitle.line3 }}
      </div>
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
import MainLogo from "@/components/home/MainLogo.vue";
import '@/assets/images/programmer.svg';
import '@/assets/scss/pages/home.scss'

export default defineComponent({
  name: "Home",
  props: {},
  components: {
    MainLogo
  },
  data() {
    return {
      mainTitle: {
        line1: "NTUT",
        line2: "Programming",
        line3: "Club"
      },
      mainDescription: {
        line1: "北科程式設計研究社",
        line2: "一群熱愛程式設計的學生所組成的社團。",
        line3: "我們致力於推廣資訊教育，讓彼此體驗程式的美好。",
        line4: "想學學校不會教的東西嗎? 或是從小練就一身演算法功力，卻沒舞台發揮？ 甚至是寫個 App，讓全校使用?",
        line5: "讓我們一起報名資訊競賽，一起參加資訊年會，一起寫程式吧！",
        line6: "我們每學期皆會開辦社課及社聚，也會舉辦社遊、跨校交流、黑客松等各式各樣的精彩活動。",
        line7: "萬事俱備，只剩入社，心動不如馬上行動，現在就加入我們吧！"
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
