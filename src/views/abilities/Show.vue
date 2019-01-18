<template lang="pug">
div(v-if='ability')
  section
    h1.title {{ ability.name }}
      small.subject-content__title--secondary ({{ ability.ability_type }})
    h2.subtitle {{ ability.effect }}
    hr
    item-link(:item='ability.item') test
  section
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
