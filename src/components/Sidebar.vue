<template lang="pug">
aside.menu
  .sidebar__toggle-button(@click='toggleSidebar')
    i.fas.fa-bars
  .menu-list__container
    ul.menu-list.menu-list-spaced
      ability
      item
      key-item
      location
      mixes
      monster
</template>
<script>
import Item from './sidebar/Item.vue'
import Mixes from './sidebar/Mixes.vue'
import Ability from './sidebar/Ability.vue'
import Monster from './sidebar/Monster.vue'
import KeyItem from './sidebar/KeyItem.vue'
import Location from './sidebar/Location.vue'

export default {
  data() {
    return {
      expanded: true
    }
  },
  created() {
    if (window.outerWidth <= 575) {
      this.toggleSidebar()
    }
  },
  methods: {
    toggleSidebar() {
      this.expanded = !this.expanded
      this.$emit('toggle-sidebar')
    }
  },
  components: {
    Item,
    Mixes,
    Ability,
    Monster,
    KeyItem,
    Location
  }
}
</script>
