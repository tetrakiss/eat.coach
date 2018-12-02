import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Customers from '@/components/Customers'
import ViewCustomer from '@/components/viewCustomer'
import { auth } from '@/components/firebaseInit'

Vue.use(Router)

const router = new Router({
  saveScrollPosition: true,
  history: true,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/customers/customer/:customer',
      name: 'viewCustomer',
      component: ViewCustomer,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if( requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next ('dashboard');
  else next();
});

export default router
