<template lang="pug">
pre
  code {{ keyItems }}
</template>
<script>
import IndexBase from '../base/IndexBase'

export default {
  extends: IndexBase,
  data() {
    return {
      stateKey: 'keyItems',
      fetchKey: 'fetchKeyItems'
    }
  },
  computed: {
    keyItems() {
      return this.records
    }
  }
}
</script>
