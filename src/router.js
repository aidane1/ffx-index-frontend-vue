import Vue from 'vue'
import Router from 'vue-router'

import home from './routes/home'
import items from './routes/items'
import mixes from './routes/mixes'
import monsters from './routes/monsters'
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
    ...home,
    ...items,
    ...mixes,
    ...monsters,
    ...keyItems,
    ...abilities,
    ...locations,
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
