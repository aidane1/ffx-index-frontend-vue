<template lang="pug">
category(
  :records='locations', 
  :fetch-index-fn='fetchLocations', 
  :dropdown-fetch-fn='fetchLocation', 
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
        name: 'Locations',
        route: 'location_index'
      }
    }
  },
  computed: {
    ...mapState({
      locations: (state) => state.locations
    })
  },
  methods: {
    async fetchLocations() {
      await this.$store.dispatch('fetchLocations')
    },
    async fetchLocation(slug) {
      await this.$store.dispatch('fetchLocation', slug)
    }
  },
  components: {
    Category
  }
}
</script>
