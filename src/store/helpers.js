import 'whatwg-fetch'

const fetchData = async ({ commit }, stateObject, url, predicate, commitType) => {
  if (!!predicate) {
    return
  }

  try {
    const response = await window.fetch(url)
    const data = await response.json()

    commit(commitType, { data, stateObject })
  } catch (e) {
    alert(`Error fetching ${stateObject}`)
  }
}

export const fetchIndex = async (store, stateObject, url) => {
  fetchData(store, stateObject, url, !!store.state[stateObject].length, 'commitIndex')
}

export const fetchShow = async (store, stateObject, url, slug) => {
  fetchData(store, stateObject, url, !!store.state[stateObject][slug], 'commitShow')
}
