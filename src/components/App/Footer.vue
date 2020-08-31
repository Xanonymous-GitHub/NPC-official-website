<template>
  <div class="footer">
    <div class="icons">
      <go :key="key" :to="svg.link" v-for="(svg, key) in svgList">
        <svg fill="white" viewBox="0 0 1 1">
          <use :xlink:href="'#'+svg.name+'.svg'"/>
          _
        </svg>
      </go>
    </div>
    <div class="copyright">
      Copyright <b style="font-family: sans-serif">&copy;</b> 2020 by NTUT Programming Club
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

export default defineComponent({
  name: "Footer",
  setup() {
    const svgList = [
      {name: 'facebook-brands', link: 'https://www.facebook.com/NPC.OwO'},
      {name: 'instagram-brands', link: 'https://www.instagram.com/npc.designer'},
      {name: 'youtube-brands', link: 'https://www.youtube.com/channel/UCzYSXfm15W7QNkomC6lLXxg'},
      {name: 'github-brands', link: 'https://github.com/NTUT-NPC'}
    ]

    return {svgList}
  }
});
</script>
