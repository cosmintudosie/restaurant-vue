<template>
  <div class="logo-div" @click="this.$router.push('/')">
    <img
      href="#"
      src="https://www.dropbox.com/s/f6gy3w7poegn6wy/logo1.png?raw=1"
    />
  </div>
</template>
<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
img {
  width: 7rem;
  opacity: 0.7;
  border-radius: 100px;
  z-index: 3;
  transition: all 500ms ease-in;
  cursor:pointer;

}
img:hover {
  opacity: 1;
  transform: translateY(-20px);
}
</style>
