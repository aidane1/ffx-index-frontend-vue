<template lang="pug">
category(
  :records='abilities', 
  :fetch-index-fn='fetchAbilities', 
  :dropdown-fetch-fn='fetchAbility', 
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
        name: 'Abilities',
        route: 'ability_index'
      }
    }
  },
  computed: {
    ...mapState({
      abilities: (state) => state.abilities
    })
  },
  methods: {
    async fetchAbilities() {
      await this.$store.dispatch('fetchAbilities')
    },
    async fetchAbility(slug) {
      await this.$store.dispatch('fetchAbility', slug)
    }
  },
  components: {
    Category
  }
}
</script>
