<template lang="pug">
pre
  code {{ location }}
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'location',
      fetchKey: 'fetchLocation'
    }
  },
  computed: {
    location() {
      return this.record
    }
  }
}
</script>
