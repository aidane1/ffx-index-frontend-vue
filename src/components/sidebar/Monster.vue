<template lang="pug">
category(
  :records='monsters', 
  :fetch-index-fn='fetchMonsters', 
  :dropdown-fetch-params='monsterParams', 
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
        name: 'Monsters',
        route: 'monster_index'
      }
    }
  },
  computed: {
    ...mapState({
      monsters: (state) => state.monsters
    })
  },
  methods: {
    async fetchMonsters() {
      await this.$store.dispatch('fetchMonsters')
    },
    monsterParams(slug) {
      return ['fetchMonster', slug]
    }
  },
  components: {
    Category
  }
}
</script>
