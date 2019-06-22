<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="item-name">Name</span>
        <span class="item-price float-right">Price</span>
      </li>
      <hr class="hr">
      <li class="list-group-item" v-for="(item, index) in items" :key="index">
        <button class="btn btn-sm btn-danger" @click="removeItem(index)">X</button>
        <span class="item-name">{{item.title}}</span>
        <span class="item-price float-right">{{item.price}}</span>
      </li>
      <hr class="hr">
      <li class="list-group-item">
        <span class="item-name">Total</span>
        <span class="item-price float-right">${{totalPrice}}</span>
      </li>
      <li v-if="items.length > 0" class="list-group-item">
        <button @click="checkout" class="btn btn-block btn-success float-center">Checkout</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      let total = 0;
      this.items.forEach(item => {
        total += parseFloat(item.price);
      });
      return total.toFixed(2);
    }
  },
  methods: {
    removeItem(index) {
      this.$store.commit("removeItem", index);
    },
    checkout() {
      if (confirm("Are you sure, you want to checkout?")) {
        this.$store.commit("clearItems");
      }
    }
  }
};
</script>

<style>
.hr {
  border: 1px solid lightgray;
  width: 100%;
}
</style>