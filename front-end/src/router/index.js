import Vue from "vue";
import VueRouter from "vue-router";
import CartPage from "@/views/CartPage";
import ProductPage from "@/views/ProductPage";
import ProductDetailPage from "@/views/ProductDetailPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/products",
    name: "Product",
    component: ProductPage,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetailPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
  {
    path: "/",
    redirect: "/products",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
