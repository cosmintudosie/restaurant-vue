import { defineStore } from "pinia";
import axios from 'axios'
export default defineStore("daily", {
  state: () => ({
    dailyMenu: [],
  }),
  actions: {
 async getDaily(){ 
    try{
    const products = await axios.get("products")
      const shuffledDaily = products.data.filter(el=> el.daily===true)
      this.dailyMenu = products.data.filter(el=> el.daily===true)
          }catch(error){
console.log(error)
      }
     },

 async updateDaily(item){
    try {
      await axios.patch('products', item);
      await getDaily()
      ;
    } catch (error) {
      console.log(error);
    }
     },
      },
});
