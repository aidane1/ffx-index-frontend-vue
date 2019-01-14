<template lang="pug">
aside.menu
  .sidebar__toggle-button(@click='toggleSidebar')
    i.fas.fa-bars
  .menu-list__container
    ul.menu-list.menu-list-spaced
      ability
</template>
<script>
import Ability from './sidebar/Ability.vue'

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
    Ability
  }
}
</script>
