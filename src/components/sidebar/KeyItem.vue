<template lang="pug">
category(
  :records='keyItems', 
  :fetch-index-fn='fetchKeyItems', 
  :dropdown-fetch-params='keyItemParams', 
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
        name: 'Key Items',
        route: 'key_item_index'
      }
    }
  },
  computed: {
    ...mapState({
      keyItems: (state) => state.keyItems
    })
  },
  methods: {
    async fetchKeyItems() {
      await this.$store.dispatch('fetchKeyItems')
    },
    keyItemParams(slug) {
      return ['fetchKeyItem', slug]
    }
  },
  components: {
    Category
  }
}
</script>
