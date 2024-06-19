import { createRouter, createWebHistory } from "vue-router";

import Us from "@/pages/Us.vue"
import Catalog from "@/pages/Catalog.vue"
import Registration from "../pages/Registration.vue"


const routes = [
  { path: "/", component: Catalog },
  { path: "/Us", component: Us },
  { path: "/Registration", component: Registration },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
