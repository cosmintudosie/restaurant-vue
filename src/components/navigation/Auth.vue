<template>
<section>
    <div >User: {{  loggedUser||''}}</div>
  <ul>
  <div v-if="loggedUser">
    <li @click.prevent='logout'>
    Logout
   </li>
  </div>
  <div v-else>
   <li>
    <router-link to="/register">Register</router-link>
   </li>
    <li>
    <router-link to="/login">Login</router-link>
   </li>
  </div>
  </ul>
</section>
</template>

<script>
import { mapStores } from "pinia";
import { mapActions } from "pinia";
import useUserStore from "../../stores/user.js";
export default{
    name: 'Auth',

computed: {
    ...mapStores(useUserStore),
        loggedUser() {
      return this.userStore.loggedUser;
        }
    },

methods:{
    logout(){
        localStorage.removeItem('activeUser')
        localStorage.removeItem('token')
       this.userStore.loggedUser=null
        this.$router.push({ path: '/' })
       
    }
 },
 
 }
</script>
<style scoped>
    div{
   display: flex;
   gap: 20px;     

    }
    ul{
        list-style: none;
           }
    li,a{
    text-decoration: none;
    color: rgb(112, 111, 96);
    cursor:pointer;
    }
    li:hover{
         color:rgb(227, 240, 199);
    }
    a:hover{
        color:rgb(227, 240, 199);
    }
</style>