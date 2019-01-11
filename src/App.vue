<template lang="pug">
//- .content-container
//-   sidebar.content-left
//-   main.content-right
//-     router-view
.content-container
  #left.column
    .top-left
    .bottom
      sidebar
  #right.column
    .top-right
    .bottom
</template>
<script>
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
// @import 'bulma/sass/utilities/_all.sass';
// @import 'bulma/sass/base/_all.sass';
// @import 'bulma/sass/components/_all.sass';
// @import 'bulma/sass/elements/_all.sass';
// @import 'bulma/sass/grid/_all.sass';
// @import 'bulma/sass/layout/_all.sass';

@import './assets/stylesheets/main';
</style>
