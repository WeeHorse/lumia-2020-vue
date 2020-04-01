import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)


// ändra här för att lägga till nya routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
