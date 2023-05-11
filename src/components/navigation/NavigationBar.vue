<template>
  <nav class="nav-bar">
    <Auth/>
    <Logo />
    <Links />
  </nav>
</template>

<script>
import Auth from "./Auth.vue";
import Links from "./Links.vue";
import Logo from "./Logo.vue";
export default {
  name: "NavigationBar",
  components: {
    Auth,
    Logo,
    Links,
  },
  
};
</script>
<style scoped>
nav {
  display: flex;
  width: 100%;
  padding: 0 3rem;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background-color: #2c1f05;
  font-weight: 500;
  font-size: 1.5rem;
  z-index: 10;
    color:rgb(240, 224, 205);

}

</style>
