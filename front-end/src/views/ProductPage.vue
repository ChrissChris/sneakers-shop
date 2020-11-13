<template>
  <div id="page-wrap">
    <div class="grid-wrap">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="sneakers.imageUrl" />
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-price">$ {{ product.price }}</p>
        <router-link :to="'/product' + product.id">
          <button>View Details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "@/sneakers-data.js";
export default {
  name: "ProductPage",
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}

.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>
