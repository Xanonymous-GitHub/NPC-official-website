<template>
  <NavDrawer :navItems="menuItems" class="animate__animated animate__backInDown"/>
  <div class="nav-bar animate__animated animate__backInDown">
    <router-link to="/">
      <svg class="nav-logo" fill="black" viewBox="0 0 2703 630">
        <use xlink:href="#npc_text.svg"/>_
      </svg>
    </router-link>
    <div class="menu-box">
      <router-link :key="key" :to="item.link"
                   v-for="(item, key) in menuItems">
        <div class="item">
          &#9733;{{ item.name }}
        </div>
        <div class="underline"/>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent} from 'vue';
import '@/assets/images/npc_text.svg';
import '@/assets/scss/components/nav-bar.scss'

export default defineComponent({
  name: "NavBar",
  components: {
    NavDrawer: defineAsyncComponent(() => import('@/components/NavDrawer.vue'))
  },
  setup() {
    const menuItems = [
      {
        name: "首頁",
        link: "/",
      },
      {
        name: "關於",
        link: "/"
      },
      {
        name: "幹部介紹",
        link: "/"
      },
      {
        name: "社團歷史",
        link: "/"
      },
      {
        name: "專案成果",
        link: "/redirect/NPC-github",
      },
      {
        name: "Mr. Coding",
        link: "/"
      }
    ]
    return {menuItems}
  }
});
</script>
