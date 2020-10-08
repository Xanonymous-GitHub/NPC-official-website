<template>
  <main id="login" class="page-container">
    <div class="login-form">
      <div class="title">
        NPC 帳號
      </div>
      <div class="input-area">
        <label for="username-input"/>
        <input id="username-input" name="username" placeholder="帳號" type="email"/>
        <label for="password-input"/>
        <input id="password-input" name="password" placeholder="密碼" type="password"/>
      </div>
      <div class="action">
        <InnerLink class="button login" to="/">
          登入
        </InnerLink>
      </div>
      <div class="bottom"></div>
    </div>
    <div class="bg"/>
  </main>
<!--  <slot name="footer"></slot>-->
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/assets/scss/pages/login.scss';
import '@/assets/scss/components/App/buttons.scss'
import InnerLink from "@/components/App/InnerLink.vue";

export default defineComponent({
  name: "Login",
  components: {
    InnerLink
  }
});
</script>
