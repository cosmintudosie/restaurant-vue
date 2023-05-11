<template>
  <div>
    <AddProductForm />
    <ReceivedOrders />
  </div>
</template>
<script>
import AddProductForm from "./AddProductForm.vue";
import ReceivedOrders from "./ReceivedOrders.vue";
export default {
  name: "Admin",
  components: {
    AddProductForm,
    ReceivedOrders,
  },
};
</script>
<style scoped>
div {
  display: flex;
  margin-top: 100px;
  gap: 10px;
  background-color: rgb(185, 149, 102);
}
</style>
