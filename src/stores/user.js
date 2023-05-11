import { defineStore } from "pinia";
import axios from 'axios'


export default defineStore("user", {
  state: () => ({
    loggedUser: null,
  }),
  actions: {
    async register(values){
        const newUser = {
            name: values.name,
            email: values.email,
            password: values.password
        }
        await axios.post('users', newUser)
       
      
    },
    
    async authenticate(values) {
       
        const pendingUser={
       email: values.email,
       password: values.password
        }
       
   axios.post('users/passCompare', pendingUser).then(res=> 
        {

if (res.data.status==='fail'){alert('Adresa de mail sau parola gresite')}
            if (res.data.status==='succes'){
               
localStorage.setItem('activeUser', res.data.data.userName);
localStorage.setItem('token', res.data.token)
                this.loggedUser= res.data.data.userName
                
            }
        })
       
    },
    async signOut() {
      await auth.signOut();

      this.userLoggedIn = false;
    }
    }  
});
