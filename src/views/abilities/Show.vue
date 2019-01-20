<template lang="pug">
.m-b-md(v-if='ability')
  section
    h1.title {{ ability.name }}
      small.subject-content__title--secondary ({{ ability.ability_type }})
    h2.subtitle {{ ability.effect }}
  hr
  section.content(v-if='ability.item')
    strong.subject-content__section-title Customization Cost
    span.subject-content__section-subtitle 
      item-link(:item='ability.item') {{ ability.item.name }} 
      | &times; {{ ability.item_amount }}
  section.content(v-if='ability.monster_drops.length')
    strong.subject-content__section-title Dropped By
    div.subject-content__section-subtitle(
      v-for='monster in ability.monster_drops', 
      :key='monster.id'
    ) 
      monster-link(:monster='monster') {{ monster.name }}
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
