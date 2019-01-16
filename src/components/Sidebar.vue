<template lang="pug">
aside.menu
  .sidebar__toggle-button(@click='toggleSidebar')
    i.fas.fa-bars
  .menu-list__container
    ul.menu-list.menu-list-spaced
      ability
      item
      key-item
</template>
<script>
import Item from './sidebar/Item.vue'
import Ability from './sidebar/Ability.vue'
import KeyItem from './sidebar/KeyItem.vue'

export default {
  data() {
    return {
      expanded: true
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
    Ability,
    KeyItem
  }
}
</script>
