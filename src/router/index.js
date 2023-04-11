import { createWebHistory, createRouter } from "vue-router";
import ChoicePage from "../components/ChoicePage.vue";
import Helloworld from "../components/HelloWorld";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: Helloworld,
  },
  {
    path: "/seconde",
    name: "SecondePage",
    component: ChoicePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;