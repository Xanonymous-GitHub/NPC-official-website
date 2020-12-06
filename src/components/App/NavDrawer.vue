<template>
  <nav class="nav" id="nav" role="navigation">
    <ul class="nav__menu" hidden id="menu" tabindex="-1">
      <li :key="key" class="nav__item" v-for="(navItem, key) in navItems">
        <component :is="navItem.external?ExternalLink:InnerLink" :to="navItem.link" class="nav__link"
                   rel="noreferrer noopener">&#9733;{{ navItem.name }}
        </component>
      </li>
    </ul>
    <a aria-controls="menu" aria-expanded="false" class="nav__toggle" rel="noreferrer noopener" role="button">
      <svg class="menu-icon" height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg">
        <g>
          <line class="menu-icon__bar" x1="13" x2="37" y1="16.5" y2="16.5"/>
          <line class="menu-icon__bar" x1="13" x2="37" y1="24.5" y2="24.5"/>
          <line class="menu-icon__bar" x1="13" x2="37" y1="24.5" y2="24.5"/>
          <line class="menu-icon__bar" x1="13" x2="37" y1="32.5" y2="32.5"/>
          <circle class="menu-icon__circle" cx="25" cy="25" r="23"/>
        </g>
        _
      </svg>
    </a>
    <div class="splash">
      <div class="drawer">
        <div class="npc-logo">
          <svg fill="white" viewBox="0 0 2703 630">
            <use xlink:href="#npc_text.svg"/>
            _
          </svg>
        </div>
      </div>
    </div>
  </nav>
  <div class="bottom-layer"/>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import '@/assets/scss/components/App/nav-drawer.scss'
import ExternalLink from "@/components/App/ExternalLink.vue";
import InnerLink from "@/components/App/InnerLink.vue";

export default defineComponent({
  name: "NavDrawer",
  props: {
    navItems: {
      required: true
    }
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bodyScrollLock = require('body-scroll-lock');
    onMounted(() => {
      const nav = document.querySelector('#nav') as HTMLElement;
      const menu = document.querySelector('#menu') as HTMLUListElement;
      const menuToggle = document.querySelector('.nav__toggle') as HTMLLinkElement;
      const bottomLayer = document.querySelector('.bottom-layer') as HTMLDivElement;
      const disableBodyScroll = bodyScrollLock.disableBodyScroll;
      const enableBodyScroll = bodyScrollLock.enableBodyScroll;
      let isMenuOpen = false;

      const toggleNavigationDrawer = () => {
        isMenuOpen = !isMenuOpen;
        menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
        menu.hidden = !isMenuOpen;
        nav.classList.toggle('nav--open');
        bottomLayer.classList.toggle('bottom-layer--open');
        isMenuOpen ? disableBodyScroll(bottomLayer) : enableBodyScroll(bottomLayer)
      }

      menuToggle.addEventListener('click', e => {
        e.preventDefault();
        toggleNavigationDrawer()
      });

      bottomLayer.addEventListener('click', e => {
        e.preventDefault();
        isMenuOpen = false;
        menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
        menu.hidden = !isMenuOpen;
        nav.classList.remove('nav--open');
        bottomLayer.classList.remove('bottom-layer--open');
        enableBodyScroll(bottomLayer)
      });

      nav.addEventListener('keydown', e => {
        if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
          return;
        }
        const menuLinks = menu.querySelectorAll('.nav__link');
        if (e.keyCode === 9) {
          if (e.shiftKey) {
            if (document.activeElement === menuLinks[0]) {
              menuToggle.focus();
              e.preventDefault();
            }
          } else if (document.activeElement === menuToggle) {
            (menuLinks[0] as HTMLUListElement).focus();
            e.preventDefault();
          }
        }
      });
    })
    return {
      InnerLink,
      ExternalLink
    }
  }
});
</script>
