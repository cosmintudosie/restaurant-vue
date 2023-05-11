<template>
  <NavigationBar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from "./components/navigation/NavigationBar.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    RouterView,
    
    Footer,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
