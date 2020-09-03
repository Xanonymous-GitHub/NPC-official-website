<template>
  <main class="page-container" id="welcome">
    <div class="contain contain__default-bg">
      <div class="congrats">
        <h1 v-if="!showCongratulation">{{ displayMessages.title }}</h1>
        <h1 v-if="showCongratulation">Congrat<span class="hide">ulation</span>s !</h1>
        <div class="done">
          <div class="dot-spin" v-if="showProgressbar"/>
          <svg v-if="!showCongratulation" viewBox="0 0 1 1">
            <use :xlink:href="displayMessages.icon"/>
          </svg>
          <svg id="tick" style="enable-background:new 0 0 37 37;" version="1.1" viewBox="0 0 37 37"
               x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
          <path class="circle path"
                d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
                style="fill:#0cdcc7;stroke:#07a796;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;"/>
            <polyline class="tick path" points="11.6,20 15.9,24.2 26.4,13.8 "
                      style="fill:none;stroke:#fff;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;"/>
          </svg>
        </div>
        <div class="text">
          <p :key="key" v-for="(msg, key) in displayMessages.content">
            {{ msg }}
          </p>
          <p class="rank" v-if="showRank">你的名次：{{ rank }}
            <br/><span style="font-size: 0.2rem">{{ verificationCode }}</span></p>
        </div>
        <p class="regards">NPC 北科程式設計研究社</p>
      </div>
    </div>
  </main>
  <slot name="footer"></slot>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted, reactive, toRefs} from 'vue';
import '@/assets/scss/pages/welcome.scss'
import '@/assets/images/kiss-regular.svg'
import '@/assets/images/exclamation-circle-solid.svg'
import {
  firebaseType,
  firebaseDocumentType,
  firebaseTimeStampType,
  firebaseUserType,
  anonymousLogin,
  getTimeStamp,
  getCurrentUser,
  getFirebaseDocuments
} from "@/utils/firebase";

type winnerType = {
  timestamp: firebaseTimeStampType,
  anonymous_uid: string,
  winner_index: number
}

type freshmenPartyDocumentType = {
  remaining_awards: number,
  winner_index: number,
  winners: Array<winnerType>
}

export default defineComponent({
  name: "Welcome",
  setup() {
    const firebase = inject<firebaseType>('firebase') as firebaseType

    enum gameResults {
      WINNER = 'WINNER',
      LOSER = 'LOSER',
      UNKNOWN = 'UNKNOWN'
    }

    class eligibilityManager {
      public isAlreadyWinner!: boolean
      public registryUidEligibility!: boolean
      public rank!: number
      public userUid!: string

      constructor(freshmenPartyDocumentData: freshmenPartyDocumentType) {
        const currentUser = getCurrentUser(firebase)
        this.userUid = (currentUser?.uid) as string
        const {remaining_awards, winners, winner_index} = freshmenPartyDocumentData
        this.isAlreadyWinner = winners.map(winner => winner.anonymous_uid).includes(((currentUser as firebaseUserType)?.uid) as string)
        this.registryUidEligibility = remaining_awards > 0 && !this.isAlreadyWinner
        this.rank = this.isAlreadyWinner ? (winners.find(winner => winner.anonymous_uid === ((currentUser as firebaseUserType)?.uid) as string) as winnerType).winner_index : winner_index
      }
    }

    const registryWinnerDevice = async (freshmenPartyDocuments: firebaseDocumentType, freshmenPartyDocumentData: freshmenPartyDocumentType): Promise<void> => {
      const {remaining_awards, winners, winner_index} = freshmenPartyDocumentData
      winners.push({
        anonymous_uid: (firebase.auth().currentUser?.uid as string),
        timestamp: (getTimeStamp() as firebaseTimeStampType),
        winner_index
      })
      await freshmenPartyDocuments.update({
        remaining_awards: remaining_awards > 0 ? remaining_awards - 1 : 0,
        winners,
        winner_index: winner_index + 1
      })
    }

    const getFreshmenPartyGameResult = async (): Promise<gameResults> => {
      try {
        await anonymousLogin(firebase)
        const freshmenPartyDocuments = await getFirebaseDocuments('/public/events/freshmen_party/', 'data')
        const freshmenPartyDocumentData = ((await freshmenPartyDocuments.get()).data()) as freshmenPartyDocumentType
        const anonymousUserEligibility = new eligibilityManager(freshmenPartyDocumentData)
        data.rank = anonymousUserEligibility.rank
        data.verificationCode = anonymousUserEligibility.userUid
        if (anonymousUserEligibility.registryUidEligibility) {
          await registryWinnerDevice(freshmenPartyDocuments, freshmenPartyDocumentData)
          return gameResults.WINNER
        }
        return anonymousUserEligibility.isAlreadyWinner ? gameResults.WINNER : gameResults.LOSER
      } catch (_) {
        return gameResults.UNKNOWN
      }
    }

    const displayMessages = {
      win: {
        title: '',
        content: [
          '太神啦！',
          '你們是超快過關的組別！',
          '快點去找工作人員拿特殊獎勵吧！'
        ]
      },
      loss: {
        title: 'oops!',
        content: [
          '太可惜了...',
          '雖然成功破關了，但是特殊獎勵已經被其他組領走了哦!',
          '但我們還有準備安慰獎，去找工作人員領取吧！'
        ],
        icon: '#kiss-regular.svg'
      },
      connecting: {
        title: 'Connecting...',
        content: [
          '判定獎項中',
          '正在連接至遊戲伺服器'
        ]
      },
      error: {
        title: 'Oh No!',
        content: [
          '連線至遊戲伺服器時發生問題！',
          '請重新整理頁面或洽詢工作人員！'
        ],
        icon: '#exclamation-circle-solid.svg'
      }
    }

    const data = reactive({
      showProgressbar: true,
      showCongratulation: false,
      displayMessages: displayMessages.connecting,
      rank: 0,
      showRank: false,
      verificationCode: ''
    })

    onMounted(async () => {
      const gameResult = await getFreshmenPartyGameResult()
      setTimeout(() => {
        data.showProgressbar = false;
        switch (gameResult) {
          case gameResults.WINNER:
            data.showCongratulation = true;
            (document.querySelector('.contain') as HTMLDivElement).classList.remove('contain__default-bg');
            (document.querySelector('.contain') as HTMLDivElement).classList.add('contain__winner-bg')
            data.displayMessages = displayMessages.win;
            (document.querySelector('.done') as HTMLDivElement).classList.add('drawn')
            data.showRank = true;
            break;
          case gameResults.LOSER:
            (document.querySelector('.contain') as HTMLDivElement).classList.remove('contain__default-bg');
            (document.querySelector('.contain') as HTMLDivElement).classList.add('contain__loser-bg')
            data.displayMessages = displayMessages.loss;
            break;
          case gameResults.UNKNOWN:
            (document.querySelector('.congrats') as HTMLDivElement).classList.add('congrats__error-color')
            data.displayMessages = displayMessages.error;
            break;
        }
      }, 500)
    })

    return {
      ...toRefs(data)
    }
  }
});
</script>
