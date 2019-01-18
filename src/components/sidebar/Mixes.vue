<template lang="pug">
category(
  :records='mixes', 
  :fetch-index-fn='fetchMixes', 
  :dropdown-fetch-params='mixParams', 
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
    mixParams(slug) {
      return ['fetchMix', slug]
    }
  },
  components: {
    Category
  }
}
</script>
