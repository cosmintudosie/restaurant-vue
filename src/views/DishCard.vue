<template>
  <div class="card presentationCard">
    <button class="close-button" @click="onCloseCard">X</button>
    <h1>{{ dish.title }}</h1>
    <img src="../assets/beefsoup.jpg" />
    <ul>
      Ingredients:
      {{
        dish.ingredients
      }}
    </ul>
    <p>{{ dish.price }} RON</p>
    <button
      class="small-button"
      @click.prevent="addOrderToList(dish.title, dish.price)"
    >
      Order
    </button>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import useOrderListStore from "../stores/orderList.js";
export default {
  name: "DishCard",
  props: ["dish"],
  emits: ["close-card"],
  computed: {
    ...mapStores(useOrderListStore),
  },
  methods: {
    onCloseCard() {
      this.$emit("close-card");
    },
    addOrderToList(title, price) {
      const order = {
        title: title,
        price: price,
        qty: 1,
      };
     
      const orderAlreadyInList = this.orderStore.list.find(
        (ord) => ord.title === order.title
      );
      if (orderAlreadyInList) {
        orderAlreadyInList.qty++;
      } else {
        this.orderStore.list.push(order);
      }
     
    },
  },
};
</script>
<style scoped>
.card {
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  background-color: #5c4c1d;
  z-index: 555;

  max-width: 20rem;
  max-height: 35rem;
  box-shadow: 0 0 15px 5px #856b39;

  transition: 5s;
}
.card img {
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
}

.card ul {
  color: #2e220d;
  font-size: 1.7rem;
  margin: 2rem;
  list-style: square;
}
.card p {
  font-size: 1rem;
}
.close-button {
  position: absolute;
  right: 2rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
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
</style>
