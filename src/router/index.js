import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/GraphResearch',
    name: 'GraphResearch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GraphResearch.vue'),
  },
  {
    path: '/ThreeResearch',
    name: 'ThreeResearch',
    component: () => import(/* webpackChunkName: "about" */ '../views/ThreeResearch.vue'),
  },
  {
    path: '/CanvasResearch',
    name: 'CanvasResearch',
    component: () => import(/* webpackChunkName: "about" */ '../views/CanvasResearch.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
