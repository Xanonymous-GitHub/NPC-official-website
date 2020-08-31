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

export default defineComponent({
  name: "App",
  props: {},
  components: {
    NavBar,
    Footer
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    function debounce(func: Function, delay = 1) {
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
      window.location.reload()
    }

    onMounted(() => {
      window.addEventListener("orientationchange", debounce(onOrientationchange), false);
      nyancat()
      document.body.addEventListener('touchmove', function (e) {
        e.preventDefault();
      });
      document.dispatchEvent(new Event('app-rendered'));
    })

    onBeforeUnmount(() => {
      window.removeEventListener("orientationchange", debounce(onOrientationchange), false)
    })

    return {}
  }
});
</script>
