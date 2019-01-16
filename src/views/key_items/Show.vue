<template lang="pug">
pre
  code {{ keyItem }}
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'keyItem',
      fetchKey: 'fetchKeyItem'
    }
  },
  computed: {
    keyItem() {
      return this.record
    }
  }
}
</script>
