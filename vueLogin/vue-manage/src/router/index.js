import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: ()=>import("../views/main.vue"),
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
      }
    ]
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
