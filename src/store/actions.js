import { fetchIndex, fetchShow } from './helpers'

const apiBase = 'http://192.168.1.111:4000/api'

export default {
  fetchMixes(store) {
    fetchIndex(store, 'mixes', `${apiBase}/mixes`)
  },
  fetchMix(store, slug) {
    fetchShow(store, 'mix', `${apiBase}/mixes/${slug}`, slug)
  },
  fetchItems(store) {
    fetchIndex(store, 'items', `${apiBase}/items`)
  },
  fetchItem(store, slug) {
    fetchShow(store, 'item', `${apiBase}/items/${slug}`, slug)
  },
  fetchMonsters(store) {
    fetchIndex(store, 'monsters', `${apiBase}/monsters`)
  },
  fetchMonster(store, slug) {
    fetchShow(store, 'monster', `${apiBase}/monsters/${slug}`, slug)
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
  },
  fetchLocations(store) {
    fetchIndex(store, 'locations', `${apiBase}/locations`)
  },
  fetchLocation(store, slug) {
    fetchShow(store, 'location', `${apiBase}/locations/${slug}`, slug)
  }
}
