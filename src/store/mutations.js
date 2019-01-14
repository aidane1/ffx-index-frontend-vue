export default {
  commitIndex(state, payload) {
    state[payload.stateObject] = payload.data
  },
  commitShow(state, payload) {
    state[payload.stateObject][payload.data.slug] = payload.data
  }
}
