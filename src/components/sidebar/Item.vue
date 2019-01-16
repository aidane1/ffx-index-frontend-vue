<template lang="pug">
li( 
  @mouseover='startPreload', 
  @mouseout='cancelPreload',
  @touchstart='startPreload',
  @touchend='cancelPreload'
)
  router-link(:to='{ name: "item_index" }') Items
    span.sidebar__dropdown-arrow(
      :class='sectionToggleClass', 
      @click.prevent='expanded = !expanded'
    )
  ul(v-show='expanded')
    dropdown-item(
       v-for='item in items',
      :key='item.id',
      :dropdown-item='item',
      :label='item.name',
      :fetch-fn='fetchItem'
    )
</template>
<script>
import { mapState } from 'vuex'

import Category from './Category'
import DropdownItem from './DropdownItem'

export default {
  extends: Category,
  computed: {
    ...mapState({
      items: (state) => state.items
    })
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('fetchItems')
    },
    async fetchItem(slug) {
      await this.$store.dispatch('fetchItem', slug)
    }
  },
  components: {
    DropdownItem
  }
}
</script>
