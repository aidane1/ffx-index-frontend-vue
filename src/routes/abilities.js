export default [
  {
    name: 'ability_show',
    path: '/abilities/:slug',
    component() {
      return import(/* webpackChunkName: "ability-show" */ '../views/abilities/Show.vue')
    }
  },
  {
    name: 'ability_index',
    path: '/abilities',
    component() {
      return import(/* webpackChunkName: "ability-index" */ '../views/abilities/Index.vue')
    }
  }
]
