import { defineStore } from "pinia";
import axios from 'axios'
export default defineStore("order", {
  state: () => ({
    list: [],
  }),
  actions: {
    async order(values){
        
        let foodOrder = {
        objects: this.list,
        address: values.address,
        phone: values.phone,
       
      };
       
      try {
      const response = await axios.post("orders", foodOrder);
      ;
    } catch (error) {
      console.log(error);
    }
     
    },
      
    },
});
