export default [
  {
    name: 'item_show',
    path: '/items/:slug',
    component() {
      return import(/* webpackChunkName: "item-show" */ '../views/items/Show.vue')
    }
  },
  {
    name: 'item_index',
    path: '/items',
    component() {
      return import(/* webpackChunkName: "item-index" */ '../views/items/Index.vue')
    }
  }
]
