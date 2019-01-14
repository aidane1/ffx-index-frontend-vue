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
  async created() {
    await this.$store.dispatch('fetchAbility', this.$route.params.slug)
  }
}
</script>
