<template>
  <main class="page-container" id="welcome">
    welcome
  </main>
  <slot name="footer"></slot>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted} from 'vue';
import '@/assets/scss/pages/welcome.scss'
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

type freshmenPartyDocumentType = { remaining_awards: number, winners: Array<{ timestamp: firebaseTimeStampType, anonymous_uid: string }> }

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

      constructor(freshmenPartyDocumentData: freshmenPartyDocumentType) {
        const currentUser = getCurrentUser(firebase)
        const {remaining_awards, winners} = freshmenPartyDocumentData
        this.isAlreadyWinner = winners.map(winner => winner.anonymous_uid).includes(((currentUser as firebaseUserType)?.uid) as string)
        this.registryUidEligibility = remaining_awards > 0 && !this.isAlreadyWinner
      }
    }

    const registryWinnerDevice = async (freshmenPartyDocuments: firebaseDocumentType, freshmenPartyDocumentData: freshmenPartyDocumentType): Promise<void> => {
      const {remaining_awards, winners} = freshmenPartyDocumentData
      winners.push({
        anonymous_uid: (firebase.auth().currentUser?.uid as string),
        timestamp: (getTimeStamp() as firebaseTimeStampType)
      })
      await freshmenPartyDocuments.update({
        remaining_awards: remaining_awards > 0 ? remaining_awards - 1 : 0,
        winners
      })
    }

    const getFreshmenPartyGameResult = async (): Promise<gameResults> => {
      try {
        await anonymousLogin(firebase)
        const freshmenPartyDocuments = await getFirebaseDocuments('/public/events/freshmen_party/', 'data')
        const freshmenPartyDocumentData = ((await freshmenPartyDocuments.get()).data()) as freshmenPartyDocumentType
        const anonymousUserEligibility = new eligibilityManager(freshmenPartyDocumentData)
        console.log(anonymousUserEligibility)
        if (anonymousUserEligibility.registryUidEligibility) {
          await registryWinnerDevice(freshmenPartyDocuments, freshmenPartyDocumentData)
          return gameResults.WINNER
        }
        return anonymousUserEligibility.isAlreadyWinner ? gameResults.WINNER : gameResults.LOSER
      } catch (_) {
        return gameResults.UNKNOWN
      }
    }

    onMounted(async () => {
      const gameResult = await getFreshmenPartyGameResult()
      console.log(gameResult)
    })
    return
  }
});
</script>
