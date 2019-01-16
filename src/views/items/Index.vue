<template lang="pug">
pre
  code {{ items }}
</template>
<script>
import IndexBase from '../base/IndexBase'

export default {
  extends: IndexBase,
  data() {
    return {
      stateKey: 'items',
      fetchKey: 'fetchItems'
    }
  },
  computed: {
    items() {
      return this.records
    }
  }
}
</script>
