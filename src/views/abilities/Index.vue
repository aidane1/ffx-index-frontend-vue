<template lang="pug">
pre
  code {{ abilities }}
</template>
<script>
import IndexBase from '../base/IndexBase'

export default {
  extends: IndexBase,
  data() {
    return {
      stateKey: 'abilities',
      fetchKey: 'fetchAbilities'
    }
  },
  computed: {
    abilities() {
      return this.records
    }
  }
}
</script>
