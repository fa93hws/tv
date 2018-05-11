import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Test from '@/container/RightGrids/Test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/components/tabs/pages',
      name: 'tabHome',
      component: Test
    }
  ]
})
