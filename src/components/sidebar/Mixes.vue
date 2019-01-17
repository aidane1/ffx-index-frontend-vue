<template lang="pug">
category(
  :records='mixes', 
  :fetch-index-fn='fetchMixes', 
  :dropdown-fetch-fn='fetchMix', 
  :display-data='displayData'
)
</template>
<script>
import { mapState } from 'vuex'

import Category from './Category'

export default {
  data() {
    return {
      displayData: {
        name: 'Mixes',
        route: 'mix_index'
      }
    }
  },
  computed: {
    ...mapState({
      mixes: (state) => state.mixes
    })
  },
  methods: {
    async fetchMixes() {
      await this.$store.dispatch('fetchMixes')
    },
    async fetchMix(slug) {
      await this.$store.dispatch('fetchMix', slug)
    }
  },
  components: {
    Category
  }
}
</script>
