<template>
  <div class="footer">
    <div class="npc-logo">
      <svg fill="white" viewBox="0 0 2703 630">
        <use xlink:href="#npc_text.svg"/>
        _
      </svg>
    </div>
    <div class="icons">
      <ExternalLink v-for="(svg, key) in svgList" :key="key" :to="svg.link">
        <svg fill="white" viewBox="0 0 1 1">
          <use :xlink:href="'#'+svg.name+'.svg'"/>
          _
        </svg>
      </ExternalLink>
    </div>
    <div class="copyright">
      Copyright <b style="font-family: sans-serif">&copy;</b> {{ currentYear }} NTUT Programming Club, All rights reserved.
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/assets/scss/components/App/footer.scss'
import '@/assets/images/facebook-brands.svg'
import '@/assets/images/instagram-brands.svg'
import '@/assets/images/youtube-brands.svg'
import '@/assets/images/github-brands.svg'
import '@/assets/images/linkedln.svg'
import '@/assets/images/npc_text.svg'
import '@/assets/images/discord.svg'
import ExternalLink from "@/components/App/ExternalLink.vue";
import {joinDiscordLink} from "@/utils/discordLinkLoader";

export default defineComponent({
  name: "Footer-Component",
  components: {
    ExternalLink
  },
  setup() {
    const svgList = [
      {name: 'facebook-brands', link: 'https://www.facebook.com/NPC.OwO'},
      {name: 'discord', link: joinDiscordLink},
      {name: 'instagram-brands', link: 'https://www.instagram.com/npc.designer'},
      {name: 'youtube-brands', link: 'https://www.youtube.com/channel/UCzYSXfm15W7QNkomC6lLXxg'},
      {name: 'github-brands', link: 'https://github.com/NTUT-NPC'},
      {name: 'linkedln', link: 'https://www.linkedin.com/groups/13905422'}
    ]

    const currentYear = new Date().getFullYear().toString()

    return {svgList, currentYear}
  }
});
</script>
