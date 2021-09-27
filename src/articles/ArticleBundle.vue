<template>

  <!--  <Article-->
  <!--      badge="HOT!!"-->
  <!--      badge-bg="red"-->
  <!--      bg-color="-->
  <!--        linear-gradient(135deg, black 25%, transparent 25%) -50px 0,-->
  <!--        linear-gradient(225deg, black 25%, transparent 25%) -50px 0,-->
  <!--        linear-gradient(315deg, black 25%, transparent 25%),-->
  <!--        linear-gradient(45deg, black 25%, transparent 25%)-->
  <!--      "-->
  <!--      button="立即報名"-->
  <!--      button-link="https://forms.gle/LN9VbY3xhXrGknpW6"-->
  <!--      picture-flex-direction="column"-->
  <!--      picture-flex-wrap="wrap"-->
  <!--      picture-height="620px"-->
  <!--      picture-width="960px"-->
  <!--      text-color="white"-->
  <!--      title="Unity 連續社課"-->
  <!--      style="background-size: 2em 2em;background-color: #111111"-->
  <!--  >-->
  <!--    <template #picture>-->
  <!--      <img alt="" src="https://i.imgur.com/BbSEXoL.webp">-->
  <!--    </template>-->
  <!--    <template #textContent>-->
  <!--      你是否十分熱愛遊玩遊戲，而想嘗試看看自己製作遊戲？-->
  <!--      <br/>-->
  <!--      <br/>-->
  <!--      <br/>-->
  <!--      若你有這個念頭，但還未付諸行動，那就快來參加這次的 Unity 社課吧～-->
  <!--      <br/>-->
  <!--      <br/>-->
  <!--      <br/>-->
  <!--      本次課程為期四周，每周一堂，將利用四堂課的時間，教你如何完成一個小型的射擊遊戲！-->
  <!--      <br/>-->
  <!--      <br/>-->
  <!--      <br/>-->
  <!--      <span style="white-space: pre-line;word-break: break-word">-->
  <!--        時 間：11/24 (二)、12/01 (二) 、12/08 (二) 、12/15 (二)，-->
  <!--        <span style="color: yellow">-->
  <!--          19:30~21:30 ( 19:20 入場 )-->
  <!--        </span>-->
  <!--        <br/>-->
  <!--        地 點：共同科館 312 教室-->
  <!--        <br/>-->
  <!--      </span>-->
  <!--      <p style="font-size: xx-small;color: darkorange">-->
  <!--        四堂課程皆有關聯性，且因為名額限制，為了確保出席率，首次上課需-->
  <!--        <span style="color: red;font-size: medium;font-weight: bolder">現場繳交</span>-->
  <!--        400 元保證金，詳情請見報名表單-->
  <!--      </p>-->
  <!--    </template>-->
  <!--  </Article>-->

  <Article :buttons="ctfArticleButtons" title="CTF 搶旗賽">
    <template #picture>
      <img alt="" src="https://i.imgur.com/gs3j7cz.webp">
    </template>
    <template #textContent>
      在許多的競賽遊戲中，奪下對手的旗幟是一種勝利的宣告。
      <br/><br/>
      而CTF(Capture The Flag)是資訊安全領域的競賽，玩家必須要有能力分析系統漏洞， 且利用該漏洞撰寫攻擊程式。
      <br/><br/>
      而漏洞包含了網頁安全、密碼學、逆向工程等等，攻擊成功後可取得該題的旗幟(Flag)，玩家將拿到的 Flag 上交到伺服器後就可得分。
      <br/><br/>
      現在，我們社團也有一些的題目，給對資安有興趣卻不知道從何著手的同學。
      <br/><br/>
      歡迎各位來小試身手，而若各位在解題中遇到任何問題，也可以直接私訊粉專，我們將會有專人來為你解答。
    </template>
  </Article>

  <!-- TAT <[MAIN]> -->
  <Article id="tat-article" :buttons="tatArticleButtons" badge="FREE" badge-bg="#00C33A"
           title="TAT - 北科生活">
    <template #picture>
      <img alt="" src="https://i.imgur.com/pMSmPA8.webp" style="border-radius: 30px;box-shadow: #a9a9a9 1px 1px 40px">
    </template>
    <template #textContent>
      方便，簡潔，快速，強大，豐富您的北科生活！
      <br/><br/>
      迅速查詢北科學生課表與行事曆，查看北科 i 學園公告，下載北科 i 學園檔案
      <br/><br/>
      查閱北科學生成績與學分資訊，並主動推播重要消息
      <br/><br/>
      支援中文、英文顯示，老師亦可使用
      <br/><br/>
      即刻安裝，北科生活無煩惱～
      <br/><br/>
      歡迎您提供寶貴的意見、錯誤回報、創意點子給我們。你的想法，我們實現！
      <br/><br/>
      <b class="text-red-600">新功能全力製作中，敬請期待！！</b>
      <br/><br/>
      <div class="flex flex-wrap">
        <span class="m-1">
          <a href="https://apps.apple.com/tw/app/tat-北科生活/id1513875597" rel="noreferrer noopener" target="_blank">
          <img alt="available on the appStore" src="https://i.imgur.com/S12KIOz.webp" style="width: 200px">
        </a>
        </span>
        <span class="m-1">
          <a href="https://play.google.com/store/apps/details?id=club.ntut.npc.tat" rel="noreferrer noopener"
             target="_blank">
          <img alt="get it on google play" src="https://i.imgur.com/2ClcPEL.webp" style="width: 200px">
        </a>
        </span>
      </div>
    </template>
  </Article>

  <!-- 入社引導 <[MAIN]> -->
  <Article id="join-us-article" :buttons="joinUsArticleButtons" bg-color="#5865F2" textColor="white" title="如何加入我們？">
    <template #picture>
      <img alt="" src="https://i.imgur.com/rkobsqy.webp">
    </template>
    <template #textContent>
      你也想成為 NPC 的一員嗎？
      加入我們不但能聆聽精彩的社課內容，還能跟其他社員們一起交流程式設計，甚至能和我們一起參加大型資訊年會和競賽！
      <br/><br/>
      不管你是剛入門的新手，或是資訊界的大佬，我們都歡迎你的加入！
      <br/><br/>
      此外，我們也有自己的 Discord 大群，無論是否要入社，甚至你是外校的夥伴，都可以直接加入我們的伺服器唷
      <br/><br/>
      或者您也可以在我們的社課或定期聚找 NPC 的工作人員、私訊 Facebook 粉專說要入社，我們就會和您接洽幫您處理入社事宜。
      <br/><br/>
      記得在入社時準備 500 元社費，你就能享有終生的社員資格，並獲贈社服乙件囉！
    </template>
    <template #Discord-svg-slot>
      <use xlink:href="#discord-white.svg"/>
    </template>
  </Article>

  <!-- 關於 <[MAIN]> -->
  <Article id="about-block" picture-flex-wrap="wrap" title="About us">
    <template #picture>
      <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              src="https://www.youtube-nocookie.com/embed/qGNUgFJYMdI"
              style="border: 0" title="介紹影片"/>
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
import {defineAsyncComponent, defineComponent, reactive, toRefs} from 'vue';
import '@/assets/scss/components/App/buttons.scss'
import {joinDiscordLink} from "@/utils/discordLinkLoader";

// import SVGs here ================
import '@/articles/articleResources/tea.svg';
import '@/articles/articleResources/discord-white.svg'
// =================================

export default defineComponent({
  name: "ArticleBundle",
  components: {
    Article: defineAsyncComponent(() => import('@/components/home/Article.vue')),
  },
  setup() {
    const articleButtons = reactive({
      joinUsArticleButtons: [
        {
          displayText: 'Discord',
          link: joinDiscordLink,
          colorClasses: 'dark',
          specialSVG: true
        },
        {
          displayText: '線上聊天',
          link: 'https://m.me/NPC.OwO',
          colorClasses: 'white'
        }
      ],
      ctfArticleButtons: [
        {
          displayText: '開始挑戰',
          link: 'https://entroy.tk'
        }
      ],
      tatArticleButtons: [
        {
          displayText: '意見反饋',
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSeOxTzhSrfdMQIkZ-iY4kM_ZgVXSVkEagGxwkEyk6YBd4pEJA/viewform?usp=sf_link'
        }
      ]
    })

    return {
      ...toRefs(articleButtons),
    }
  }
})
</script>
