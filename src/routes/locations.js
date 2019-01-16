export default [
  {
    name: 'location_show',
    path: '/locations/:slug',
    component() {
      return import(/* webpackChunkName: "location-show" */ '../views/locations/Show.vue')
    }
  },
  {
    name: 'location_index',
    path: '/locations',
    component() {
      return import(/* webpackChunkName: "location-index" */ '../views/locations/Index.vue')
    }
  }
]
