<template>
  <!-- Registration Form -->
  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
 <vee-form @submit="register"
       :validation-schema="schema"
        class="form-container"
      >
        <h2 class="form-title">Register</h2>

        <div class="form-field">
          <label for="name">Name</label>
          <vee-field name="name" type="text" v-model="name" />
          <ErrorMessage class="msg" name="name" />
        </div>
        <div class="form-field">
          <label for="email">E-mail</label>
          <vee-field name="email" type="email" v-model="email"  />
          <ErrorMessage class="msg" name="email" />
        </div>
        <div class="form-field">
          <label for="password" >Password</label>
          <div>
            <vee-field
              name="password"
             :type="showPass? 'password':'text'"
              v-model="password"
            />
            <i @click="showPass = !showPass"  :class="{'fa-eye-slash':!showPass}" class="check far fa-eye" ></i>
            <br/>
            <ErrorMessage class="msg" name="password" />
          </div>
        </div>
        <div class="form-field">
          <label for="confirmPassword">Confirm password</label>
          <div>
            <vee-field
              name="confirmPassword"
              :type="showPass? 'password':'text'"
              class="confirmPassword passType"
              required
            />
            <i @click="showPass = !showPass"  :class="{'fa-eye-slash':!showPass}" class="check far fa-eye" ></i>
            <br/>
            <ErrorMessage class="msg" name="confirmPassword" />
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
      </vee-form>
</template>

<script>
import { mapActions } from "pinia";
import useUserStore from "../../stores/user.js";
export default {
  name: "RegisterForm",
 data(){
    return{
    showPass: true,
    name:'',
    email:'',
    password:'',
    schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|min:3|max:100|email",
        password: "required|min:4|max:100|excluded:password",
        confirmPassword: "passwords_mismatch:@password",
              },
    }
  },
  methods:{
   
...mapActions(useUserStore, {
      createUser: "register",
    }),
    async register(values) {
        try {
        await this.createUser(values);
        this.$router.push({ path: '/' })
        alert("Account created, please login")
      } catch (error) {
        console.log(error)
        return;
      }
        
    },
  }
};
</script>
<style scoped>
.msg {
    color:red;
    font-size: 1rem;
}
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
