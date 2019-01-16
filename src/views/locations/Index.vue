<template lang="pug">
pre
  code {{ locations }}
</template>
<script>
import IndexBase from '../base/IndexBase'

export default {
  extends: IndexBase,
  data() {
    return {
      stateKey: 'locations',
      fetchKey: 'fetchLocations'
    }
  },
  computed: {
    locations() {
      return this.records
    }
  }
}
</script>
