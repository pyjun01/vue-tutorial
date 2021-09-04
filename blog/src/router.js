import { createWebHistory, createRouter } from 'vue-router';

import Home from "./views/Home.vue";
import Hi from "./views/Hi.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/h1",
    name: "Hi",
    component: Hi,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;