<template>
  <router-view v-slot="{ Component }">
    <keep-alive exclude="Redirect">
      <component :is="Component">
        <template #nav>
          <NavBar/>
        </template>
        <template #footer>
          <Footer/>
        </template>
      </component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import "@/assets/scss/app.scss";
import {defineComponent, onMounted, onBeforeUnmount} from "vue";
import nyancat from "@/utils/nyancat";
import NavBar from "@/components/App/NavBar.vue";
import Footer from "@/components/App/Footer.vue";
// import firebase, {db} from "@/utils/firebase";
export default defineComponent({
  name: "App",
  props: {},
  components: {
    NavBar,
    Footer
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    function debounce(func: Function, delay = 100) {
      let timer: number;
      return () => {
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func(args);
        }, delay)
      }
    }

    function onOrientationchange() {
      window.removeEventListener("orientationchange", debounce(onOrientationchange))
      window.location.reload()
    }

    onMounted(() => {
      window.addEventListener("orientationchange", debounce(onOrientationchange))
      nyancat()
      document.addEventListener('touchstart', function () {
        return
      }, {passive: false})
      document.dispatchEvent(new Event('app-rendered'));
    })
    onBeforeUnmount(async () => {
      window.removeEventListener("orientationchange", debounce(onOrientationchange))
      // await firebase.auth().signOut()
    })
    // provide('firebase', firebase)
    // provide('db', db)
    return {}
  }
});
</script>
