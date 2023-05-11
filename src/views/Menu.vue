<template>
  <div class="full-menu display-elements">
    <h2 class="">MENU</h2>
    <!-- <p>{{ info }}</p> -->
    <button class="btn-back" @click="this.$router.go(-1)">&#8920</button>
    <div class="menu-wrapper">
      <router-link :to='{ path: `/product/${category.title.toLowerCase()}` }'
        class="menu-elements"
        v-for="category in categories"
        :key="category.title"
      >
        <img :src="'../assets/img/' + category.src" />
        <h3 class="motto" id="Ciorbe">{{ category.title }}</h3>
      </router-link >
    </div>
  </div>
</template>

<script>

export default {
  name: "Menu",
  data() {
    return {
      categories: [
        { title: "Ciorbe",  src: "soups.jpg" },
        { title: "Fripturi", src: "maindish.jpg" },
        { title: "Pizza",  src: "pizza.jpg" },
        { title: "Paste",  src: "pasta.jpg" },
        { title: "Garnituri", src: "potatoes.jpg" },
        { title: "Salate", src: "salads.jpg" },
        { title: "Deserturi", src: "deserts.jpg" },
      ],
     
    };
  },
  
};
</script>
<style scoped>
.full-menu h2 {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  color: #0a0702bf;
}
.btn-back {
  font-size: 4rem;
  width: 4rem;
  position: absolute;
  left: 10rem;
  color: #876521;
  background: transparent;
  border: none;
  cursor: pointer;
}
.btn-back:hover {
  color: #fbe9c5;
}
.full-menu {
  max-width: 1200px;
  border-radius: 5px;
  margin: 8rem 2rem 2rem 2rem;
  border: 4px solid #9c885f;
}
.menu-wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  }
.menu-elements {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
}
.menu-elements img {
  width: 18rem;
  height: 18rem;
  opacity: 0.9;
  border-radius: 10px;
}
.motto {
  font-size: 2rem;
  color: #856b39;
  line-height: 100%;
  cursor: pointer;
  text-transform: capitalize;
  padding-bottom: 4rem;
}
.menu-wrapper {
  margin-top: 8rem;
}
</style>
