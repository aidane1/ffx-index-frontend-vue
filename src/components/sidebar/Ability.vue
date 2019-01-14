<template lang="pug">
li(
  @click='expanded = !expanded', 
  @mouseover='startPreload', 
  @mouseout='cancelPreload'
)
  a Ability
    span(:class='sectionToggleClass')
  ul(v-show='expanded')
    dropdown-item(
       v-for='ability in abilities',
      :key='ability.id',
      :dropdown-item='ability',
      :label='ability.name',
      :fetch-fn='fetchAbility'
    )
</template>
<script>
import { mapState } from 'vuex'

import Category from './Category'
import DropdownItem from './DropdownItem'

export default {
  extends: Category,
  data() {
    return {
      title: 'Ability'
    }
  },
  computed: {
    ...mapState({
      abilities: (state) => state.abilities
    })
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('fetchAbilities')
    },
    async fetchAbility(slug) {
      await this.$store.dispatch('fetchAbility', slug)
    }
  },
  components: {
    DropdownItem
  }
}
</script>
