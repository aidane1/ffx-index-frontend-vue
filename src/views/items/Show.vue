<template lang="pug">
pre
  code {{ item }}
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'item',
      fetchKey: 'fetchItem'
    }
  },
  computed: {
    item() {
      return this.record
    }
  }
}
</script>
