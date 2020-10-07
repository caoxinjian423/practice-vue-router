import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InfoDetails from "@/views/InfoDetails.vue";
import NotFound from "@/views/NotFound.vue";
import SecretDetails from "@/views/SecretDetails.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/infos/:infoId",
    name: "InfoDetails",
    component: InfoDetails,
    props: true,
    children: [
      {
        path: ":secret",
        name: "secretDetails",
        component: SecretDetails,
        props: true,
        meta: {
          details: "不要告诉别人",
        },
      },
    ],
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === "secretDetails") {
    alert(to.meta.details);
  }

  next();
});

export default router
