import { createRouter, createWebHistory } from "vue-router";
import Home from "@view/Home.vue";
import Super from "@view/Super.vue";
import Encapsulation from "@view/Encapsulation.vue";
import Distribute from "@view/Distribute.vue";
import Shelf from "@view/Shelf.vue";
import About from "@view/About.vue";

const routes = [
  {path: "/",name: "Home",component: Home,},
  {path: "/super",name: "Super",component: Super,},
  {path: "/encapsulation",name: "Encapsulation",component: Encapsulation,},
  {path: "/distribute",name: "Distribute",component: Distribute,},
  {path: "/shelf",name: "Shelf",component: Shelf,},
  {path: "/about",name: "About",component: About,},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
