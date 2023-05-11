<template>
  <div class="shop" id="shopping-cart">
    <div class="shopping-cart" v-if="ordersList">
      <div class="list-cart" v-for="order in ordersList">
        <h3>{{ order.title }}</h3>
        <button class="btnChg" @click="reduceQty(order)">-</button>
        <p>{{ order.qty }}</p>
        <button class="btnChg" @click="addQty(order)">+</button>
        <p>{{ order.price * order.qty }} RON</p>
      </div>
    </div>
    <p v-if="totalPrice" class="cart-total" >Total:{{ totalPrice }} RON</p>
    <p v-else>Your shopping cart is empty</p>
    <vee-form class="command-form"
    @submit='placeOrder' :validation-schema="schema"
    >
      <label for="adress">Adress</label>
      <vee-field name="address" v-model="address" type="text" required/>
      <ErrorMessage class="msg" name="address" />
      <label for="tel">Phone</label>
      <vee-field name="phone" v-model="phone" type="text" required/>
      <ErrorMessage class="msg" name="phone" />
    <button v-if="loggedUser" type="submit" class="small-button cmd-btn" >
      Order
    </button>
    <span v-else> You have to register to make orders </span>
    </vee-form>
  </div>
  <div class="confirm-command" v-if="confirmCommand">
    Your order has been processed!
    <button class="small-button" @click="redirect">OK</button>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { mapActions } from "pinia";
import useOrderListStore from "../stores/orderList.js";
import useUserStore from "../stores/user.js";
import axios from "axios";

export default {
  name: "ShoppingCart",
  data() {
    return {
      address: "",
      phone: "",
      confirmCommand: false,
      schema: {
        
        address: "required|min:10|max:100",
        phone: "required|min:9|max:12|",
       
              },
    };
  },
  computed: {
...mapStores(useUserStore),
        loggedUser() {
      return this.userStore.loggedUser;
        },

    ...mapStores(useOrderListStore),

    ordersList() {
      return this.orderStore.list;
    },
    totalPrice() {

      let total = 0;
      this.orderStore.list.forEach((obj) => (total += obj.qty * obj.price));
      return total;
    },
  },
  methods: {
    reduceQty(order) {
      order.qty--;
      this.orderStore.list = this.orderStore.list.filter((ord) => ord.qty > 0);
    },
    addQty(order) {
      order.qty++;
    },
...mapActions(useOrderListStore, {order:"order"}),
    async placeOrder(values) {
        console.log(values)
      try {
            const response = await this.order(values);
            if(response){this.confirmCommand = true}
        } catch (error) {
            console.log(error)
            return
        }
     
    },
    redirect() {
      this.$router.push("/");
      this.orderStore.list = [];
    },
  },
};
</script>

<style scoped>
.shop {
  top: 11rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  min-height: 30rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: #8b7957;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 7px;
}
.shop p{
    text-align:center;
}
.command-form {
  font-size: 1.7rem;
}
.shopping-cart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
}
.command-form {
  display: flex;
  flex-direction: column;
}
.command-form input {
  min-width: 10rem;
  max-width: 25rem;
  margin-bottom: 1rem;
}
.list-cart {
  display: flex;
  color: #2e220d;
  gap: 1rem;
  align-items: center;
}
.confirm-command {
  position: absolute;
  top: 7rem;
  left: 50%;
  transform: translateX(-50%);
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  background-color: brown;
  color: white;
  font-size: 2rem;
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
span {
    color:rgb(49, 13, 13);
}
</style>
