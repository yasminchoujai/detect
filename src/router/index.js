import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import SignInForm from '@/views/SignInForm.vue'
import SignUpForm from '@/views/SignUpForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInForm
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
