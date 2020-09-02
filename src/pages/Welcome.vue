<template>
  <main class="page-container" id="welcome">
    welcome
  </main>
  <slot name="footer"></slot>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted} from 'vue';
import '@/assets/scss/pages/welcome.scss'
import {firebaseType, dbType} from "@/utils/firebase";

export default defineComponent({
  name: "Welcome",
  setup() {
    const firebase = inject<firebaseType>('firebase') as firebaseType
    const db = inject<dbType>('db') as dbType

    onMounted(async () => {
      await firebase.auth().signInAnonymously().catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('@@A', errorCode)
        console.log('@@B', errorMessage)
      });

      console.log(firebase.auth().currentUser)

      const freshmenPartyData = (await db.collection('/public/events/freshmen_party/').doc('data').get()).data()
      console.log(freshmenPartyData)
    })
    return
  }
});
</script>
