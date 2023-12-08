import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: ()=>import("../views/main.vue"),
    redirect: '/home',
    children: [
      {
        path: "/user",
        name: "User",
        component: () =>
          import("../views/User.vue"),
      },
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/tab1",
        name: "Tab1",
        component: () =>
          import("../views/Tab1.vue"),
      },
    ]
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
