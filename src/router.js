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

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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

router.afterEach(() => {
  const contentElement = document.querySelector('.subject-content')

  if (contentElement && contentElement.scrollTo) {
    contentElement.scrollTo(0, 0)
  }
})

export default router
