import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      component: () => import("@/views/login/index"),
      hidden: true
    }
  ]
});

export default router;
