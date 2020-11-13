import Vue from "vue";
import VueRouter from "vue-router";
import CartPage from "@/views/CartPage";
import ProductPage from "@/views/ProductPage";
import ProductDetailsPage from "@/views/ProductDetailsPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/products",
    name: "Product",
    component: ProductPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
  {
    path: "/product-details",
    name: "ProductDetails",
    component: ProductDetailsPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
