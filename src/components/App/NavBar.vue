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
                   :name="item.name+'-nav-link'" :to="item.link">
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
import {defineAsyncComponent, defineComponent, onMounted, ref} from 'vue';
import '@/assets/images/npc_text.svg';
import '@/assets/images/qr-code.svg';
import '@/assets/scss/components/App/nav-bar.scss'
import '@/assets/scss/components/App/regular-buttons.scss'
import InnerLink from "@/components/App/InnerLink.vue";
import ExternalLink from "@/components/App/ExternalLink.vue";
import {scrollToId} from "@/utils/scroll";
import uaParser from "ua-parser-js";
import {joinDiscordLink} from "@/utils/discordLinkLoader";

export default defineComponent({
  name: "NavBar",
  components: {
    ExternalLink,
    NavDrawer: defineAsyncComponent(() => import('@/components/App/NavDrawer.vue'))
  },
  setup() {
    let shouldUseExternalTabToOpenTATUrl = true

    const generateTATDownloadUrl = (): string => {
      const os = uaParser().os.name

      // iOS
      if (os === 'iOS') {
        return 'https://apps.apple.com/tw/app/tat-%E5%8C%97%E7%A7%91%E7%94%9F%E6%B4%BB/id1513875597'
      }

      // AOS
      if (os === 'Android') {
        return 'https://play.google.com/store/apps/details?id=club.ntut.npc.tat'
      }

      shouldUseExternalTabToOpenTATUrl = false
      return ''
    }

    const tatNavigationUrl = generateTATDownloadUrl()

    const scrollToTatArticle = () => scrollToId(document.querySelector('#app') as HTMLElement, 'tat-article', 300)

    const menuItems = ref([
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
        name: "Discord",
        link: joinDiscordLink,
        external: true
      },
      {
        name: "CTF",
        link: "https://entroy.tk",
        external: true
      },
      {
        name: "TAT",
        link: tatNavigationUrl,
        external: shouldUseExternalTabToOpenTATUrl
      },
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
    ]);

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

      if (!shouldUseExternalTabToOpenTATUrl) {
        const tatNavLinks = document.querySelectorAll('[name=TAT-nav-link]') as unknown as Array<HTMLLinkElement>
        for (const link of tatNavLinks) {
          link.addEventListener('click', scrollToTatArticle)
        }
      }
    })
    return {
      menuItems,
      ExternalLink,
      InnerLink
    }
  }
});
</script>
