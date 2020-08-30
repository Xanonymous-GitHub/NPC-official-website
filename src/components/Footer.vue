<template>
  <div class="footer">
    <div class="icons">
      <router-link :key="key" :to="svg.link" v-for="(svg, key) in svgList">
        <svg fill="white" viewBox="0 0 1 1">
          <use :xlink:href="'#'+svg.name+'.svg'"/>
          _
        </svg>
      </router-link>
    </div>
    <div class="copyright">
      Copyright <b style="font-family: sans-serif">&copy;</b> 2020 by NTUT Programming Club
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/assets/scss/components/footer.scss'
import '@/assets/images/facebook-brands.svg'
import '@/assets/images/instagram-brands.svg'
import '@/assets/images/youtube-brands.svg'
import '@/assets/images/github-brands.svg'

export default defineComponent({
  name: "Footer",
  setup() {
    const svgList = [
      {name: 'facebook-brands', link: '/redirect/facebook'},
      {name: 'instagram-brands', link: '/redirect/instagram'},
      {name: 'youtube-brands', link: '/redirect/youtube'},
      {name: 'github-brands', link: '/redirect/NPC-github'}
    ]

    return {svgList}
  }
});
</script>
