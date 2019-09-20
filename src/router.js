import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*',
      redirect: '/home',
    },
    { path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('./views/Skills.vue')
    }
  ]
})
