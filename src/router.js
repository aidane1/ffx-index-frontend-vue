import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import items from './routes/items'
import abilities from './routes/abilities'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...items,
    ...abilities
  ]
})
