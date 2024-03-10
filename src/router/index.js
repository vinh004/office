import { createRouter, createWebHistory } from 'vue-router' 
import IndexView from '../views/IndexView.vue'
import NextView from '../views/NextView.vue'
import OptionsView from '../views/OptionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: IndexView,
      meta: {
        isKeepAlive: true, // Set this to true to use keep-alive
      },
    },
    {
      path: '/next',
      name: 'next',
      component: NextView
    },
    {
      path: '/options',
      name: 'options',
      component: OptionsView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
      beforeEnter: (to, from, next) => {
        // You can perform additional logic if needed
        next();
      },
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
