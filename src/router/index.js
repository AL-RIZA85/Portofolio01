import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Message from '../views/message.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/message',
    name: 'message',
    component: Message,

    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


// middleware
router.beforeEach((to, from, next) => {

  const isAuthenticated =
    localStorage.getItem('adminAuth')

  if (
    to.meta.requiresAuth &&
    !isAuthenticated
  ) {

    const password =
      prompt('Masukkan password admin')

    if (password === 'alriza') {

      localStorage.setItem(
        'adminAuth',
        'true'
      )

      next()

    } else {

      alert('Password salah')

      next('/')

    }

  } else {

    next()

  }

})

export default router

