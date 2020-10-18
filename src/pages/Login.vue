<template>
  <main id="login" class="page-container">
    <div class="login-form">
      <div class="title">
        NPC 帳號
      </div>
      <div class="input-area">
        <label for="username-input"/>
        <input id="username-input" v-model.trim.lazy="email" name="username" placeholder="帳號" type="email"/>
        <label for="password-input"/>
        <input id="password-input" v-model.trim.lazy="password" name="password" placeholder="密碼" type="password"/>
      </div>
      <div class="action">
        <div class="button login" @click="login">
          登入
        </div>
      </div>
      <div class="bottom"></div>
    </div>
    <div class="bg"/>
  </main>
  <!--  <slot name="footer"></slot>-->
</template>

<script lang="ts">
import {defineComponent, inject, reactive, toRefs} from 'vue';
import '@/assets/scss/pages/login.scss';
import '@/assets/scss/components/App/buttons.scss'
import {firebaseLogout, firebaseType, getCurrentUser, loginWithEmailAndPassword} from "@/utils/firebase";

export default defineComponent({
  name: "Login",
  setup() {
    const firebase = inject<firebaseType>('firebase') as firebaseType

    const identityCredentials = reactive({
      email: '',
      password: ''
    })

    const login = async () => {
      await firebaseLogout(firebase)
      await loginWithEmailAndPassword(
          firebase,
          identityCredentials.email,
          identityCredentials.password
      )
      console.log(await getCurrentUser(firebase)?.getIdToken())
    }

    return {
      login,
      ...toRefs(identityCredentials)
    }
  }
});
</script>
