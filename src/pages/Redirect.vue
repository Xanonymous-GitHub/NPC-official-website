<template>
  <div>Redirect to {{ externalUrl }} ...</div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import {useRoute} from 'vue-router'

export default defineComponent({
  name: "Redirect",
  setup() {
    const route = useRoute()
    const linkMap = [
      {
        name: 'NPC-github',
        link: 'github.com/NTUT-NPC'
      },
      {
        name: 'chatOnline',
        link: 'm.me/NPC.OwO'
      }
    ]
    const externalUrlName = route.params.externalUrl
    const externalUrl = linkMap.find((route) => externalUrlName === route.name)?.link
    onMounted(() => {
      window.location.replace('https://' + externalUrl as string)
    })
    return {externalUrl}
  }
});
</script>
