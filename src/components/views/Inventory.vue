<template>
  <div v-if="!loading">
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="card" style="width: 13rem;">
        <router-link tag="div" :to="{path: '/item/'+ item.id}">
          <img class="card-img-top" :src="item.photo" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
          </div>
        </router-link>
        <div class="card-footer">
          <p class="card-text">${{item.price}}</p>
          <a @click="addCartItem(item)" class="btn btn-primary">+ Add</a>
        </div>
      </div>
    </div>
  </div>
  <h2 v-else>Loading...</h2>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.fetchInventory();
  },
  computed: {
    items() {
      return this.$store.getters.getInventory;
    }
  },
  methods: {
    addCartItem(item) {
      this.$store.commit("addToCart", item);
    },
    fetchInventory() {
      const self = this;
      axios.get("http://localhost:3000/").then(response => {
        self.$store.commit("setInventory", response.data);
        self.loading = false;
      });
    }
  }
};
</script>

<style>
</style>