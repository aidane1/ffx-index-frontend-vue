<template lang="pug">
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      stateKey: '',
      fetchKey: ''
    }
  },
  computed: {
    ...mapState({
      records(state) {
        return state[this.stateKey]
      }
    })
  },
  async created() {
    await this.$store.dispatch(this.fetchKey)
  }
}
</script>
