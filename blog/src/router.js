import { createWebHistory, createRouter } from 'vue-router';

import Home from "./views/Home.vue";
import Hi from "./views/Hi.vue";
import Detail from "./views/Detail.vue";

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
  {
    path: "/v/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
