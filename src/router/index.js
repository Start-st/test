import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demo from '../views/demo.vue'
import demo2 from '../views/demo2.vue'
import demo3 from '../views/demo3.vue'
import demo4 from '../views/demo4.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: demo3
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: demo2
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: demo3
  },
  {
    path: '/demo4',
    name: 'demo4',
    component: demo4
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
