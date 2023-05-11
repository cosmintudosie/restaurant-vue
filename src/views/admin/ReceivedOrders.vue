<template>
    
    <div class="orders">
      <h1>Comenzi</h1>
      <div class="list-menu">
           
        <div v-for='order in orders'> Order
          <div v-for="object in order.objects">
           <span>{{object.title}}, Price:{{object.price}}, Pcs:{{object.times}}</span>

          </div>
          <div>
            Adress:
            <span>{{order.adress}} </span>
          </div>
          <div>Phone:
            <span>{{order.phone}}</span> 
          </div>
                   
            <button @click="remOrder(order._id)">X</button>
            <br/><br/>
        </div>
              
       
      </div>
      
    
    </div>
  
</template>

<script>
    import axios from "axios"
export default {
  name:"ReceivedOrders",
  data(){
return{
    orders:[]
}
  } ,
  
methods:{
remOrder(id){
  axios.delete(`orders/${id}`)
  .then((res)=> this.orders = this.orders.filter(el=>el._id !== id))
  
   },

},

created() {
       axios.get('orders').then(res =>  {this.orders=res.data}) ; 
       
  }
}
</script>

<style scoped>
.orders {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.5rem;
  padding-left: 2rem;
  border-left: 4px solid brown;
}
.orders > * {
  border-bottom: 2px solid rgb(223, 196, 76);
  padding-bottom: 2rem;
}
span{
    color:rgba(37, 28, 28, 0.671);
    font-size: 1.2rem;
}
</style>