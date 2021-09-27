<template>
  <NavDrawer :navItems="menuItems"/>
  <div class="nav-bar">
    <router-link rel="noreferrer noopener" to="/">
      <svg class="nav-logo" fill="black" viewBox="0 0 2703 630">
        <use xlink:href="#npc_text.svg"/>
        _
      </svg>
    </router-link>
    <div class="menu">
      <div class="slide-button slide-button__left">‹</div>

      <div class="menu-box">
        <component :is="item.external?ExternalLink:InnerLink" v-for="(item, key) in menuItems" :key="key"
                   :to="item.link">
          <div class="item">
            &#9733; {{ item.name }}
          </div>
          <div class="underline"/>
        </component>
      </div>

      <div class="slide-button slide-button__right">›</div>
      <ExternalLink to="https://qrcode.ntut.club">
        <svg class="qrcode-logo" fill="white" viewBox="0 0 1 1">
          <use xlink:href="#qr-code.svg"/>
          _
        </svg>
      </ExternalLink>
      <button class="small regular-button login-button" disabled>
        登入
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent, onMounted} from 'vue';
import '@/assets/images/npc_text.svg';
import '@/assets/images/qr-code.svg';
import '@/assets/scss/components/App/nav-bar.scss'
import '@/assets/scss/components/App/regular-buttons.scss'
import InnerLink from "@/components/App/InnerLink.vue";
import ExternalLink from "@/components/App/ExternalLink.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    ExternalLink,
    NavDrawer: defineAsyncComponent(() => import('@/components/App/NavDrawer.vue'))
  },
  setup() {
    const menuItems = [
      // {
      //   name: "Home",
      //   link: "/",
      //   external: false
      // },
      // {
      //   name: "關於",
      //   link: "/",
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
        name: "Facebook",
        link: "https://www.facebook.com/NPC.OwO",
        external: true
      },
      {
        name: "CTF",
        link: "https://entroy.tk",
        external: true
      },
      // {
      //   name: "HEY！ PTT",
      //   link: "https://ptt.npc-go.com/",
      //   external: true
      // },
      {
        name: "GitHub",
        link: "https://github.com/NTUT-NPC",
        external: true
      },
      // {
      //   name: "UploadImg",
      //   link: "/imgur"
      // },
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
          await new Promise<void>(resolve => setTimeout(() => resolve(), 1))
          lastStepValue = stepValue
        }
      }
      leftSlideButton.addEventListener('click', () => scrollMove(false))
      rightSlideButton.addEventListener('click', () => scrollMove(true))
    })
    return {
      menuItems,
      ExternalLink,
      InnerLink
    }
  }
});
</script>
