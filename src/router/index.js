import Vue from 'vue'
import VueRouter from 'vue-router'
import DataTable from "../views/DataTable";
import Overlay from "../views/Overlay";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: DataTable
  },
  {
    path: '/overlay',
    name: 'Overlay',
    component: Overlay
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
