import Vue from 'vue'

export default {
  commitIndex(state, payload) {
    state[payload.stateObject] = payload.data
  },
  commitShow(state, payload) {
    Vue.set(state[payload.stateObject], payload.data.slug, payload.data)
  }
}
