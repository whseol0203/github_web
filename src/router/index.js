import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home";
import Signin from "../views/Signin";
import Signup from "../views/Signup";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
];
const router = createRouter ({
  history: createWebHistory(),
  routes
});

export default router;