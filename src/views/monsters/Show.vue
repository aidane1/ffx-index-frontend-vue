<template lang="pug">
pre
  code {{ monster }}
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'monster',
      fetchKey: 'fetchMonster'
    }
  },
  computed: {
    monster() {
      return this.record
    }
  }
}
</script>
