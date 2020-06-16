import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Profil from '../views/Profil.vue'
import Organizace from '../views/Organizace.vue'
import RegisterOrg from '../views/RegisterOrg.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/organizace',
    name: 'Organizace',
    component: Organizace
  },
  {
    path: '/registrace-organizace',
    name: 'Registrace organizace',
    component: RegisterOrg
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
