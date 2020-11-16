<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import axios from "axios";
import { products } from "../shoes-data";
import ProductsGrid from "../components/ProductsGrid.vue";

export default {
  name: "ProductsPage",
  components: {
    ProductsGrid,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
