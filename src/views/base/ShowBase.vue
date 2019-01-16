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
      record(state) {
        return state[this.stateKey][this.$route.params.slug]
      }
    })
  },
  watch: {
    $route() {
      this.loadData()
    }
  },
  async created() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      await this.$store.dispatch(this.fetchKey, this.$route.params.slug)
    }
  }
}
</script>
