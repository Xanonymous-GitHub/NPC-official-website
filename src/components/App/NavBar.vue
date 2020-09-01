<template>
  <NavDrawer :navItems="menuItems" class="animate__animated animate__backInDown"/>
  <div class="nav-bar animate__animated animate__backInDown">
    <router-link rel="noreferrer noopener" to="/">
      <svg class="nav-logo" fill="black" viewBox="0 0 2703 630">
        <use xlink:href="#npc_text.svg"/>
        _
      </svg>
    </router-link>
    <div class="menu">
      <div class="slide-button slide-button__left">‹</div>

      <div class="menu-box">
        <to :key="key" :to="item.link" v-for="(item, key) in menuItems">
          <div class="item">
            &#9733;{{ item.name }}
          </div>
          <div class="underline"/>
        </to>
      </div>

      <div class="slide-button slide-button__right">›</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent, onMounted} from 'vue';
import '@/assets/images/npc_text.svg';
import '@/assets/scss/components/App/nav-bar.scss'

export default defineComponent({
  name: "NavBar",
  components: {
    NavDrawer: defineAsyncComponent(() => import('@/components/App/NavDrawer.vue'))
  },
  setup() {
    const menuItems = [
      {
        name: "首頁",
        link: "/",
      },
      // {
      //   name: "關於",
      //   link: "/"
      // },
      // {
      //   name: "幹部介紹",
      //   link: "/"
      // },
      // {
      //   name: "社團歷史",
      //   link: "/"
      // },
      {
        name: "專案成果",
        link: "/github",
      },
      // {
      //   name: "Mr. Coding",
      //   link: "/"
      // }
    ];
    onMounted(() => {
      const leftSlideButton = document.querySelector('.slide-button__left') as HTMLDivElement
      const rightSlideButton = document.querySelector('.slide-button__right') as HTMLDivElement
      const menuBox = document.querySelector('.menu-box') as HTMLDivElement
      const easeInOutQuad = function (t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
      const scrollMove = async (type: boolean): Promise<void> => {
        // true-> right ; false-> left
        const steps = 50;
        const speed = 3;
        let lastStepValue = 0
        for (let i = 0; i < steps + 1; i++) {
          const stepValue = easeInOutQuad(i, 0, speed * steps, steps);
          menuBox.scrollLeft += (stepValue - lastStepValue) * (type ? 1 : -1)
          await new Promise(resolve => setTimeout(() => resolve(), 1))
          lastStepValue = stepValue
        }
      }
      leftSlideButton.addEventListener('click', () => scrollMove(false))
      rightSlideButton.addEventListener('click', () => scrollMove(true))
    })
    return {menuItems}
  }
});
</script>