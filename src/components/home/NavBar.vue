<template>
  <div class="nav-bar animate__animated animate__backInDown">
    <router-link to="/">
      <svg class="nav-logo" fill="black" viewBox="0 0 2703 630">
        <use xlink:href="#npc_text.svg"/>
      </svg>
    </router-link>
    <div class="menu-box">
      <router-link :key="key" :to="item.link" tag="li" v-for="(item, key) in menuItems">
        <div class="item">
          &#9733;{{ item.name }}
        </div>
        <div class="underline"/>
      </router-link>
    </div>
    <div class="menu-button">
      &#9776;
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/assets/images/npc_text.svg';

export default defineComponent({
  name: "NavBar",
  setup() {
    const menuItems = [
      {
        name: "首頁",
        link: "/",
      },
      {
        name: "Mr.Coding",
        link: "/"
      },
      {
        name: "專案成果",
        link: "/"
      },
      {
        name: "社團歷史",
        link: "/"
      },
      {
        name: "幹部介紹",
        link: "/"
      },
      {
        name: "關於",
        link: "/"
      }
    ]
    return {menuItems}
  }
});
</script>
