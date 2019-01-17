<template lang="pug">
pre
  code {{ mix }}
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'mix',
      fetchKey: 'fetchMix'
    }
  },
  computed: {
    mix() {
      return this.record
    }
  }
}
</script>
