<template lang="pug">
pre
  code {{ abilities }}
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      abilities: (state) => state.abilities
    })
  },
  async created() {
    await this.$store.dispatch('fetchAbilities')
  }
}
</script>
