<template>
  <div class="carousel">
    <div class="images">
      <div v-for="image in images" :key="image.src">
        <img :src="'../src/img/' + image.src" />
        <div class="quote">{{ image.quote }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      images: [
        { src: "carousel0.jpg", quote: "Lorem ipsum dolor sit amet" },
        { src: "carousel1.jpg", quote: "Nulla ex odio, cursus eget lacus ac" },
        {
          src: "carousel2.jpg",
          quote: "Maecenas sit amet pellentesque lectus",
        },
        { src: "carousel3.jpg", quote: "Etiam sollicitudin est sit amet" },
        { src: "carousel4.jpg", quote: "Orci varius natoque penatibus" },
        { src: "carousel0.jpg", quote: "Lorem ipsum dolor sit amet" },
      ],
    };
  },
};
</script>

<style scoped>
.carousel {
  background-color: grey;
  margin-top: 7.5rem;
  overflow: hidden;
}
.images {
  position: relative;
  width: 600%;
  margin: 0;
  left: 0;
  animation: 20s slide infinite;
}
.images > div {
  width: 16.66%;
  float: left;
  opacity: 0.8;
  position: relative;
}
img {
  width: 100%;
}
.quote {
  max-width: 20rem;
  background-color: #5e3403;
  position: absolute;
  top: 30%;
  right: 0;
  font-size: 2rem;
  color: white;
  opacity: 0.9;
  z-index: 99;
  box-shadow: 0 0 15px 5px #9f8e68;
}
@keyframes slide {
  0% {
    left: 0%;
  }
  15% {
    left: 0%;
  }
  20% {
    left: -100%;
  }
  35% {
    left: -100%;
  }
  40% {
    left: -200%;
  }
  55% {
    left: -200%;
  }
  60% {
    left: -300%;
  }
  75% {
    left: -300%;
  }
  80% {
    left: -400%;
  }
  95% {
    left: -400%;
  }
  100% {
    left: -500%;
  }
}
</style>
