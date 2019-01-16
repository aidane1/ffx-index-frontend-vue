export default [
  {
    name: 'key_item_show',
    path: '/key-items/:slug',
    component() {
      return import(/* webpackChunkName: "key-item-show" */ '../views/key_items/Show.vue')
    }
  },
  {
    name: 'key_item_index',
    path: '/key-items',
    component() {
      return import(/* webpackChunkName: "key-item-index" */ '../views/key_items/Index.vue')
    }
  }
]
