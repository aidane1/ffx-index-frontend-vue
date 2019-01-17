<template lang="pug">
pre
  code {{ mixes }}
</template>
<script>
import IndexBase from '../base/IndexBase'

export default {
  extends: IndexBase,
  data() {
    return {
      stateKey: 'mixes',
      fetchKey: 'fetchMixes'
    }
  },
  computed: {
    mixes() {
      return this.records
    }
  }
}
</script>
