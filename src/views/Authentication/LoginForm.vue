<template>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
  <vee-form class="login element" @submit='login' :validation-schema="schema">
        <h2 class="form-title">Login</h2>

        <div class="form-field">
          <label for="userMail">E-mail</label>
          <vee-field name="email" type="email" />
          <ErrorMessage class="msg" name="name" />
        </div>
        <div class="form-field">
          <label for="password">Password</label>
          <div>
            <vee-field
              name="password"
              :type="showPass? 'password':'text'"
             
            />
            <i @click="showPass = !showPass"  :class="{'fa-eye-slash':!showPass}" class="check far fa-eye" ></i>
            <br/>
            <ErrorMessage class="msg" name="password" />
          </div>
        </div>
        <button type="submit" class="btn authenticate">Submit</button>
      </vee-form>
</template>

<script>
import { mapStores } from "pinia";
import { mapActions } from "pinia";
import useUserStore from "../../stores/user.js";
import axios from "axios"
export default {
  name: "LoginForm",
  data(){
    return{
    showPass: true,
    email:'',
    password:'',
    schema: {
        email: "required|min:3|max:100|email",
        password: "required|min:4|max:100|excluded:password",
          },
    }
  },

  computed: {
    ...mapStores(useUserStore),
        loggedUser() {
      return this.userStore.loggedUser;
        }
    },

  methods:{
...mapActions(useUserStore, {authenticate:"authenticate"}),
   async login(values) {
   
        try {
            await this.authenticate(values);

            this.$router.push({ path: '/' })
           //window.location.reload();
        } catch (error) {
            console.log(error)
            return
        }
     },
 }
 }
 

</script>
<style scoped>

.check{
    display: inline-block;
    margin-left:-2.5rem;
    cursor:pointer;
}
h2 {
  color: #312009c4;
  text-align: center;
}

form {
  flex-direction: column;
  gap: 1.5rem;
  background-color: #92815b;
  padding: 1rem;
  color: #2b2706;
  overflow: hidden;
  height: 30rem;
  width: 25rem;
  margin: 7rem auto;
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  font-size: 1.5rem;

  opacity: 0.8;
}
.form-field input {
  height: 2.5rem;
  font-size: 1.3rem;
}

.btn {
  margin: 1rem auto;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  font-size: 1.3rem;
  cursor: pointer;
}
.btn:hover {
  color: #898e8f;
  background-color: white;
}
</style>
