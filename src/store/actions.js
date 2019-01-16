import { fetchIndex, fetchShow } from './helpers'

const apiBase = 'http://localhost:4000/api'

export default {
  fetchItems(store) {
    fetchIndex(store, 'items', `${apiBase}/items`)
  },
  fetchItem(store, slug) {
    fetchShow(store, 'item', `${apiBase}/items/${slug}`, slug)
  },
  fetchKeyItems(store) {
    fetchIndex(store, 'keyItems', `${apiBase}/key-items`)
  },
  fetchKeyItem(store, slug) {
    fetchShow(store, 'keyItem', `${apiBase}/key-items/${slug}`, slug)
  },
  fetchAbilities(store) {
    fetchIndex(store, 'abilities', `${apiBase}/abilities`)
  },
  fetchAbility(store, slug) {
    fetchShow(store, 'ability', `${apiBase}/abilities/${slug}`, slug)
  }
}
