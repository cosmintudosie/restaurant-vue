<template>
  <section>
  <ul>
    <li>
    <router-link to="/admin" v-show="isAdmin">Admin</router-link>
   </li>
    <li>
    <router-link to="/menu">Menu</router-link>
   </li>
    <li>
    <router-link to="/shopping-cart">Cart</router-link>
   </li>
    
    <span v-if="items">{{ items }}</span>
  </ul>
    </section>
</template>

<script>
import { mapStores } from "pinia";
import useOrderListStore from "../../stores/orderList.js";
import useUserStore from "../../stores/user.js";

export default {
  name: "Links",
  data(){
    return{
        loggedUser: localStorage.getItem('activeUser')
    }
  },
  computed: {
    isAdmin(){
        
        return (this.loggedUser==='admin')
    },
    ...mapStores(useOrderListStore),
    
    items() {
      return this.orderStore.list.reduce((acc, curr) => acc + curr.qty, 0);
    },
  },
 
};
</script>
<style scoped>

div{
    text-align: end;
    font-size: 1.2rem;
    color:rgb(240, 224, 205);
    }
ul {
  display: flex;
  background: transparent;
  box-shadow: none;
  flex-direction: row;
  cursor: pointer;
  gap: 2rem;
  list-style: none;
  justify-content: flex-end;
  width: auto;
  height: auto;
  padding: 0;

}
a {
  text-decoration: none;
  color: rgb(233, 226, 161);
  padding: 0.5rem;
}
a:hover{
    color:rgb(91, 100, 70);
}

span {
  position: absolute;
  right: 1rem;
  color: rgb(148, 58, 58);
  width: 2rem;
  height: 2rem;
  border-radius: 200px;
  background-color: rgb(161, 141, 115);
  text-align: center;
}
</style>
