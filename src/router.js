import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import items from './routes/items'
import keyItems from './routes/key_items'
import abilities from './routes/abilities'
import locations from './routes/locations'

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
    ...keyItems,
    ...abilities,
    ...locations
  ]
})
