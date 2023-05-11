import { createRouter, createWebHistory } from "vue-router";
import Presentation from "../views/presentation/Presentation.vue";
import RegisterForm from "../views/Authentication/RegisterForm.vue";
import LoginForm from "../views/Authentication/LoginForm.vue";

import SpecificMenu from "../views/SpecificMenu.vue";
import Menu from "../views/Menu.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import Admin from "../views/admin/Admin.vue";

const routes = [
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/",
    name: "Home",
    component: Presentation,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterForm,
  }
  ,
  {
    path: "/shopping-cart",
    name: "Cart",
    component: ShoppingCart,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  }
  ,
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/product/:id",
    name: "Type",
    component: SpecificMenu,
  },
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
