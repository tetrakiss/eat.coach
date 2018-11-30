import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Customers from '@/components/Customers'
import ViewCustomer from '@/components/viewCustomer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/customers/customer/:customer',
      name: 'viewCustomer',
      component: ViewCustomer
    }
  ]
})
