<template lang="pug">
pre
  code {{ monsters }}
</template>
<script>
import IndexBase from '../base/IndexBase'

export default {
  extends: IndexBase,
  data() {
    return {
      stateKey: 'monsters',
      fetchKey: 'fetchMonsters'
    }
  },
  computed: {
    monsters() {
      return this.records
    }
  }
}
</script>
