<template>
  <Carousel />
  <About />
  <DailyMenu/>

</template>
<script>
import About from "./About.vue";
import Carousel from "./Carousel.vue";
import DailyMenu from "./DailyMenu.vue";
export default {
  name: "Presentation",
  components: {
    About,
    Carousel,
    DailyMenu,
  },
};
</script>
