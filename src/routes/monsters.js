export default [
  {
    name: 'monster_show',
    path: '/monsters/:slug',
    component() {
      return import(/* webpackChunkName: "monster-show" */ '../views/monsters/Show.vue')
    }
  },
  {
    name: 'monster_index',
    path: '/monsters',
    component() {
      return import(/* webpackChunkName: "monster-index" */ '../views/monsters/Index.vue')
    }
  }
]
