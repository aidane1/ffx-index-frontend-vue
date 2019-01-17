export default [
  {
    name: 'mix_show',
    path: '/mixes/:slug',
    component() {
      return import(/* webpackChunkName: "mix-show" */ '../views/mixes/Show.vue')
    }
  },
  {
    name: 'mix_index',
    path: '/mixes',
    component() {
      return import(/* webpackChunkName: "mix-index" */ '../views/mixes/Index.vue')
    }
  }
]
