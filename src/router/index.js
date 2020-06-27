import Vue from 'vue'
import Router from 'vue-router'
const home = ()=>import('../views/home/home')
const category = ()=>import('../views/category/category')
const cart = ()=>import('../views/cart/cart')
const profile = ()=>import('../views/profile/profile')
const shopdetail = () => import('../views/detail/shopdetail')

Vue.use(Router)

const routes = [
  {
    path:'',
    redirect : '/home'
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/home',
    component:home
  },
  {
    path: '/shopdetail/:iid',
    component:shopdetail
  }
]

const router = new Router({
  routes,
  mode:'history'
});

export default router
