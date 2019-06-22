<template>
  <div class="row">
    <div class="col-sm-6">
      <img :src="this.item.photo" alt="photo">
    </div>
    <div class="col-sm-6">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>
      <div class="card-footer">
        <p class="card-text">${{item.price}}</p>
        <a @click="addCartItem(item)" class="btn btn-primary">+ Add</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      item: ""
    };
  },
  mounted() {
    this.fetchItem();
  },
  methods: {
    addCartItem(item) {
      this.$store.commit("addToCart", item);
    },
    fetchItem() {
      const self = this;
      axios
        .get(`http://localhost:3000/item/` + this.$route.params.id)
        .then(response => {
          self.item = response.data[0];
        });
    }
  }
};
</script>

<style>
</style>