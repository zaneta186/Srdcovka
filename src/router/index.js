import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Vysledek from '../views/Vysledek.vue'
import Organizace from '../views/Organizace.vue'
import RegisterOrg from '../views/RegisterOrg.vue'
import OrgCard from '../components/OrgCard.vue'
import Projekt from '../views/Projekt.vue'
import Exitus from '../views/Exitus.vue'


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
    path: '/vysledek',
    name: 'Vysledek',
    component: Vysledek
  },
  {
    path: '/organizace',
    name: 'Organizace',
    component: Organizace
  },
  {
    path: '/organizace/:id',
    name: 'Organizace',
    component: OrgCard
  },
  {
    path: '/registrace-organizace',
    name: 'Registrace organizace',
    component: RegisterOrg
  },
  {
    path: '/projekt',
    name: 'Projekt',
    component: Projekt
  },
  {
    path: '/dekujeme',
    name: 'Dekujeme',
    component: Exitus
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
