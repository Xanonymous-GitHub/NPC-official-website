<template>

<!--  <Article bg-color="#16213e" button="立即報名" picture-flex-wrap="wrap" button-link="https://forms.gle/XMHSvUhFdztEAt5A6" text-color="white"-->
<!--           title="Python 爬蟲應用">-->
<!--    <template #picture>-->
<!--      <img alt="" src="https://imgur.com/PjcmMdu.jpg">-->
<!--    </template>-->
<!--    <template #textContent>-->
<!--      上完基礎課程之後，接下來當然就是好玩的應用課程啦～-->
<!--      <br/>-->
<!--      這堂課中講師會一步一步的從套件安裝，講解到網頁的分析方法-->
<!--      <br/>-->
<!--      讓你能夠自由自在的爬取網頁，擷取任何你想獲得的內容！-->
<!--      <br/>-->
<!--      心動了嗎？趕緊來報名參加吧！-->
<!--      <br/>-->
<!--      <br/>-->
<!--      【課程介紹】-->
<!--      <br/>-->
<!--      • 網頁分析-->
<!--      <br/>-->
<!--      • 使用套件擷取網頁內容-->
<!--      <br/>-->
<!--      • 此堂課為應用課程，建議有 Python 基礎知識再來參加-->
<!--      <br/>-->
<!--      <br/>-->
<!--      【課程資訊】-->
<!--      <br/>-->
<!--      • 時 間：10/20 (二) 19:30~21:30 ( 19:20 入場 )-->
<!--      <br/>-->
<!--      • 地 點：共同科館 312 教室-->
<!--      <br/>-->
<!--      • 主辦單位：北科程式設計研究社-->
<!--      <br/>-->
<!--      <br/>-->
<!--      【備註】-->
<!--      <br/>-->
<!--      1. 教室內請勿飲食-->
<!--      <br/>-->
<!--      2. 非社員需繳交 50 元課程費用，或者繳交 500 元直接入社-->
<!--      <br/>-->
<!--      3. 進入教室前務必戴上口罩，體溫異常者不得進場-->
<!--      <br/>-->
<!--      4. 上課地點為電腦教室，不過歡迎各位學員攜帶自己的筆電-->
<!--      <br/>-->
<!--      5. 學校網路有可能會阻擋特並連結，若無法開啟建議開啟自己網路-->
<!--      <br/>-->
<!--    </template>-->
<!--  </Article>-->

  <Article button="立即參加" button-link="https://ctf.ntut.club" title="CTF 搶旗賽">
    <template #picture>
      <img alt="" src="https://imgur.com/gs3j7cz.jpg">
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
      <br/><br/>
      而若拿到所有的 Flag 並來我們社博攤位，即可獲得額外的獎勵！
    </template>
  </Article>

  <!-- TAT <[MAIN]> -->
  <Article badge="FREE" badge-bg="#00C33A"
           title="TAT - 北科生活">
    <template #picture>
      <img alt="" src="https://imgur.com/pMSmPA8.png" style="border-radius: 30px;box-shadow: #a9a9a9 1px 1px 40px">
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
      <div style="display: flex;flex-wrap: wrap">
        <span style="margin: 0 1em;">
          <a href="https://apps.apple.com/tw/app/tat-北科生活/id1513875597" rel="noreferrer noopener" target="_blank">
          <img alt="available on the appStore" src="https://imgur.com/S12KIOz.png" style="width: 200px">
        </a>
        </span>
        <span style="margin: 0 1em;">
          <a href="https://play.google.com/store/apps/details?id=club.ntut.npc.tat" rel="noreferrer noopener"
             target="_blank">
          <img alt="get it on google play" src="https://imgur.com/2ClcPEL.png" style="width: 200px">
        </a>
        </span>
      </div>
    </template>
  </Article>

  <!-- 入社引導 <[MAIN]> -->
  <Article id="join-us-article" button="線上聊天" button-link="https://m.me/NPC.OwO" title="如何加入我們？">
    <template #picture>
      <img alt="" src="https://i.imgur.com/rkobsqy.jpg">
    </template>
    <template #textContent>
      你也想成為 NPC 的一員嗎？
      加入我們不但能聆聽精彩的社課內容，還能跟其他社員們一起交流程式設計， 甚至能和我們一起參加大型資訊年會和競賽！
      <br/><br/>
      您可以在我們的社課或定期聚找 NPC 的工作人員，或者私訊 Facebook 粉專說要入社，我們就會和您接洽幫您處理入社事宜。
      <br/><br/>
      記得在當天準備 500 元社費，你就能享有終生的社員資格囉！
    </template>
  </Article>

  <!-- 關於 <[MAIN]> -->
  <Article id="about-block" picture-flex-wrap="wrap" title="About us">
    <template #picture>
      <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
              frameborder="0"
              src="https://www.youtube-nocookie.com/embed/qGNUgFJYMdI"
              title="介紹影片"/>
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
  }
})
</script>
