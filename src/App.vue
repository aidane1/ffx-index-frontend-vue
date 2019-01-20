<template lang="pug">
.main-container(:class='{ "sidebar-collapsed": !sidebarExpanded}')
  sidebar.sidebar(@toggle-sidebar='sidebarExpanded = !sidebarExpanded')
  main.section.subject-content
    router-view
</template>
<script>
import Sidebar from '@/components/Sidebar'

export default {
  data() {
    return {
      sidebarExpanded: true
    }
  },
  mounted() {
    // loads all "index" data after mount for
    // improved handling without affecting initial load speed
    if (window.requestIdleCallback && window.innerWidth > 1024) {
      window.requestIdleCallback(this.loadAllIndexes)
    } else {
      setTimeout(this.loadAllIndexes, 10000)
    }
  },
  methods: {
    async loadAllIndexes() {
      await Promise.all([
        this.$store.dispatch('fetchAbilities'),
        this.$store.dispatch('fetchItems'),
        this.$store.dispatch('fetchKeyItems'),
        this.$store.dispatch('fetchLocations'),
        this.$store.dispatch('fetchMixes'),
        this.$store.dispatch('fetchMonsters')
      ])
    }
  },
  components: {
    Sidebar
  }
}
</script>
<style lang="scss">
@import './assets/stylesheets/main';
</style>
