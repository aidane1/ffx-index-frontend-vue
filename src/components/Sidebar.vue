<template lang="pug">
aside.menu
  .sidebar__toggle-button(@click='toggleSidebar')
    i.fas.fa-bars
  ul.menu-list
    li(v-for='section in sections', :key='section.label')
      a {{ section.label }}
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
    }
  }
}
</script>
