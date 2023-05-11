<template>
  <section>
    <h1>Meniu</h1>
    <form
      name="admin-form"
      class="admin-form"
       @submit.prevent="addDish"
      enctype="multipart/form-data"
         >
      <div class="form-container">
        <label for="category"> Category </label>
        <input type="text" name="category" list="categories" v-model="category"/>
        <datalist class="category-options" id="categories">
          <option v-for='option in options' :key="option.name">{{option.name}}</option>
          
        </datalist>
        <label for="title"> Title </label>
        <input type="text" name="title" v-model="title"/>
        <label type="number" for="price"> Price </label><input name="price" v-model="price"/>
        <label for="ingredients"> Ingredients </label>
        <div>
          <textarea type="text" name="ingredients" v-model="ingredients"/>
          
        </div>
      </div>
      <button type="submit" class="small-button" @submit.prevent="addDish">Add</button>
    </form>
    <div class="list-menu">
      <div class="menu_category" v-for='option in options'>{{option.name}}
        <div v-for="dish in option.dishes">{{dish.title}}
            <button>X</button>
            <input type="checkbox" v-model="dish.daily" @click="updateDailyMenu(dish)">
        </div>
      </div>
      
    </div>
  </section>
</template>
<script>
    import axios from 'axios'
    import { mapStores } from "pinia";
import { mapActions } from "pinia";
import useDailyStore from "../../stores/daily.js";
export default {
 name: "AddProductForm",
 data(){
    return{
        options:[
        {name:'Ciorbe', dishes:[]},
        {name:'Fripturi', dishes:[]},
        {name:'Pizza', dishes:[]},
        {name:'Paste', dishes:[]},
        {name:'Garnituri', dishes:[]}, 
        {name:'Salate', dishes:[]},
        {name:'Deserturi', dishes:[]},
        ],
        
        category:'',
        title:'',
        price:0,
        ingredients:'',
   
    }
  },
  
 methods: {
  ...mapActions(useDailyStore, {updateDaily:"updateDaily"}),
  async updateDailyMenu(item) {
   item.daily=!item.daily
        try {
            await this.updateDaily(item);
        } catch (error) {
            console.log(error)
            return}
        },
 addDish(){
 const objectSent = {
    category: this.category,
    title: this.title,
    price: this.price,
    ingredients: this.ingredients, 
    daily: false,
    }
 const activeCategory = this.options.find(el=> el.name=== this.category)
 activeCategory.dishes.push(objectSent)
 const stringObject = JSON.stringify(objectSent)
axios.post('products', stringObject)
 this.category=''
 this.title=''
 this.price=0
 this.ingredients=''
     }
    },
 async created() {
   const products= await axios.get('products')
   products.data.forEach(el=>{
        const current = this.options.find(opt=>opt.name===`${el.category}`)
       current.dishes.push({  title:el.title, daily: el.daily  } )
        }) 
        }
    }
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;

  color: white;

  font-size: 1.2rem;
}
.admin-form input {
  margin-bottom: 1rem;
  width: 20rem;
  height: 2rem;
  border-radius: 7px;
  font-size: 1.4rem;
}
.small-button {
  padding: 0.3rem 0.5rem;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
}
.small-button:hover {
  background-color: bisque;
}
.btnChg {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.4rem;
}
.small-button:active {
  background-color: red;
}

.add-product:hover {
  background-color: #5a4827;
  color: white;
}
.menu_category{
    color:#5a4827;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    
}
.menu_category div{
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: normal;
}
</style>
