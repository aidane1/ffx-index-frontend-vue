<template lang="pug">
category(
  :records='items', 
  :fetch-index-fn='fetchItems', 
  :dropdown-fetch-params='itemParams', 
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
        name: 'Items',
        route: 'item_index'
      }
    }
  },
  computed: {
    ...mapState({
      items: (state) => state.items
    })
  },
  methods: {
    async fetchItems() {
      await this.$store.dispatch('fetchItems')
    },
    itemParams(slug) {
      return ['fetchItem', slug]
    }
  },
  components: {
    Category
  }
}
</script>
