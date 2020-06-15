import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Test02 from '../views/Test02.vue'
import Test03 from '../views/Test03.vue'
import Test04 from '../views/Test04.vue'  
import Test05 from '../views/Test05.vue'  
import Test06 from '../views/Test06.vue'  
import Test07 from '../views/Test07.vue'  
import Test08 from '../views/Test08.vue'  

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
    path: '/test02',
    name: 'Test02',
    component: Test02
  },
  {
    path: '/test03',
    name: 'Test03',
    component: Test03
  },
  {
    path: '/test04',
    name: 'Test04',
    component: Test04
  },
  {
    path: '/test05',
    name: 'Test05',
    component: Test05
  },
  {
    path: '/test06',
    name: 'Test06',
    component: Test06
  },
  {
    path: '/test07',
    name: 'Test07',
    component: Test07
  },
  {
    path: '/test08',
    name: 'Test08',
    component: Test08
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
