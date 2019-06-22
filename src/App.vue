<template>
  <div id="app">
    <!-- <router-link :to="{ path: '/'}">Nabvar</router-link>
    <router-link :to="{ path: '/test'}">Test</router-link> -->
    <!-- <router-view></router-view> -->

    <Navbar @search="search"></Navbar>

    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>
          <!-- <Inventory @newItemAdded="addCartItem" :items="items"></Inventory> -->
        </div>
        <div class="col-sm-3">
          <Cart :items="cart" @removeItem="removeCartItem"></Cart>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
// import Inventory from "./components/Inventory";
// import data from "./data";

export default {
  components: {
    Navbar,
    Cart,
    // Inventory
  },
  data() {
    return {
      items: [],
      cart: []
    };
  },
  mounted() {
    // this.items = data;
  },
  methods: {
    addCartItem(item) {
      this.cart.push(item);
    },
    removeCartItem(index) {
      this.cart.splice(index, 1);
    },
    search(keyword) {
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }
  }
};
</script>


<style>
.container {
  padding-top: 3%;
}
.card {
  margin: 5px;
}
</style>
