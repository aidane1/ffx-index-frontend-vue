<template lang="pug">
pre
  code {{ ability }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      ability(state) {
        return state.ability[this.$route.params.slug]
      }
    })
  },
  watch: {
    $route() {
      this.loadAbility()
    }
  },
  async created() {
    await this.loadAbility()
  },
  methods: {
    async loadAbility() {
      await this.$store.dispatch('fetchAbility', this.$route.params.slug)
    }
  }
}
</script>
