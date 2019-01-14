export default [
  {
    name: 'ability_show',
    path: '/abilities/:slug',
    component() {
      return import(/* webpackChunkName: "ability-show" */ '../views/abilities/Show.vue')
    }
  }
]
