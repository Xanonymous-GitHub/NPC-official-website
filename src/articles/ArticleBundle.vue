<template>

  <!--  新生茶會  -->
  <Article badge="&#128293;HOT!!"
           badge-bg="red"
           bg-color="#16213e"
           button="立即報名"
           button-link="https://docs.google.com/forms/d/e/1FAIpQLSevx6CxohDSZkXJjJ2ymyydm-aTIVOmyGv7xB7oCtw5xdQr1w/viewform"
           text-color="white"
           title="2020 新生茶會">
    <template #picture>
      <svg fill="white">
        <use xlink:href="#tea.svg"/>
      </svg>
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

  <!--  關於  -->
  <Article title="About us">
    <template #picture>
      <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              frameborder="0"
              src="https://www.youtube-nocookie.com/embed/qGNUgFJYMdI"/>
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
</template>
<script lang="ts">
import {defineComponent, defineAsyncComponent} from 'vue';
import '@/assets/scss/components/App/buttons.scss'

// import SVGs here ================
import '@/articles/articleResources/tea.svg';
// =================================

export default defineComponent({
  name: "ArticleBundle",
  components: {
    Article: defineAsyncComponent(() => import('@/components/home/Article.vue')),
  },
})
</script>
