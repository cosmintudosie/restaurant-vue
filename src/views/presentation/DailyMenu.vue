<template>
  <div class="daily-menu" id="menu">
    <h5>Menu of the day</h5>
    <div class="daily-dishes">
      <ul ref="dailymenu">
       <li v-for="dish in l_dishes" :key="dish">{{dish}}:</li>
        
      </ul>
      <ul class="right-dishes">
        <li v-for="dish in r_dishes" :key="dish" @click="activeDish = dish">{{dish.title}}</li>
      </ul>
    </div>
  </div>
  <DishCard :dish="activeDish" v-if="activeDish" @close-card="activeDish=null"/>
</template>
<script>
import { mapStores } from "pinia";
import useDailyStore from "../../stores/daily.js";
import { mapActions } from "pinia";

import axios from "axios";
import DishCard from '../DishCard.vue'

export default {
  name: "DailyMenu",
  components: {
    DishCard
  },
  data() {
    return {
      position: 0,
      l_dishes: ["Felul 1","Felul 2","Desert"],
            activeDish: null,
    };
  },
 
    computed: {
    ...mapStores(useDailyStore),
        r_dishes() {
      return this.dailyStore.dailyMenu;
        }
    },
    methods:{
    ...mapActions(useDailyStore, {getDaily:"getDaily"}),

    },
    async created(){
    await this.getDaily()
    }
 
};


</script>
<style scoped>
.daily-menu {
  background-color: #0a0702bf;
  margin: 3rem auto;
  padding: 1rem 1rem;
  max-width: 40rem;
  color: #ffe1bb;
  text-align: center;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px 5px #9f8e68;
}
.daily-menu h3 {
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
}
.daily-dishes {
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
ul {
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding-right: 3rem;
}
li{
    cursor:pointer;
}

</style>
