<template>
  <div class="full-menu ">
    <h2 >{{params.toUpperCase()}}</h2>    
    <!-- <h3>{{ activeDish }}</h3> -->
    <button class="btn-back">&#8920</button>   
    <div class="menu-wrapper">
      <a @click="activeDish = dish"
        class="menu-elements" 
        v-for="dish in dishes"
        :key="dish.title"
      >
       <h3 class="motto" >{{ dish.title+'.....'+dish.price+'RON' }}</h3>
      </a >
    </div>
  </div>  
  <DishCard :dish="activeDish" v-if="activeDish" @close-card="activeDish=null"/>
</template>
<script>
   
import axios from "axios";
import DishCard from './DishCard.vue'
export default {
  name: "SpecificMenu",
  components: {
    DishCard
  },
  
  data() {
    return {
      params: this.$route.params.id,
      dishes: [],
      activeDish: null,
    };
  },
  async created() {
   let products = await axios.get("products")
   console.log(products)
    let allDishes = products.data 
    this.dishes =allDishes.filter((el) => el.category.toLowerCase() === this.params)
     
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

.menu-elements {
  display: flex;
  flex-direction: column;
  }

h3 {
  font-size: 2rem;
  color: #856b39;
  line-height: 100%;
  cursor: pointer;
  text-transform: capitalize;
  padding-bottom: 2rem;
}
.menu-wrapper {
  margin-top: 8rem;
}
a{
  text-decoration: none;
}
h3:hover{
  color:#0e0900;
}

</style>
