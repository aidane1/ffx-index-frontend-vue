<template lang="pug">
.main-container(:class='{ "sidebar-collapsed": !sidebarExpanded}')
  sidebar.sidebar(@toggle-sidebar='sidebarExpanded = !sidebarExpanded')
  main.subject-content
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
  components: {
    Sidebar
  }
}
</script>
<style lang="scss">
@import './assets/stylesheets/main';
</style>
