<template lang="pug">
aside.menu
  .sidebar__toggle-button(@click='toggleSidebar')
    i.fas.fa-bars
  .menu-list__container
    ul.menu-list.menu-list-spaced
      li(
        v-for='section in sections', 
        :key='section.label', 
        @click='section.expanded = !section.expanded'
      )
        a {{ section.label }}
          span(:class='sectionToggleClass(section)')
        ul(v-if='section.expanded')
          li
            a Members
          li
            a Plugins
          li
            a Add a member

</template>
<script>
import sidebar from './sidebar'

export default {
  data() {
    return {
      expanded: true,
      sections: sidebar
    }
  },
  methods: {
    toggleSidebar() {
      this.expanded = !this.expanded
      this.$emit('toggle-sidebar')
    },
    sectionToggleClass(section) {
      if (section.expanded) {
        return 'fas fa-chevron-down'
      }

      return 'fas fa-chevron-right'
    }
  }
}
</script>
