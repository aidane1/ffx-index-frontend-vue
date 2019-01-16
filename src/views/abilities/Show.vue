<template lang="pug">
pre
  code {{ ability }}
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'ability',
      fetchKey: 'fetchAbility'
    }
  },
  computed: {
    ability() {
      return this.record
    }
  }
}
</script>
