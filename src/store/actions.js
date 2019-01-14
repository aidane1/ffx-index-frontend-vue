import { fetchIndex, fetchShow } from './helpers'

const apiBase = 'http://localhost:4000/api'

export default {
  fetchAbilities(store) {
    fetchIndex(store, 'abilities', `${apiBase}/abilities`)
  },
  fetchAbility(store, slug) {
    fetchShow(store, 'ability', `${apiBase}/abilities/${slug}`, slug)
  }
}
