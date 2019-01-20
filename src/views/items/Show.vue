<template lang="pug">
.m-b-md(v-if='item')
  section
    h1.title {{ item.name }}
      small.subject-content__title--secondary ({{ item.effect_type }})
    h2.subtitle {{ item.effect }}
  hr
  section.content
    strong.subject-content__section-title Equipment Abilities
    template(v-if='!item.abilities.length')
      em Adds no abilities
    template(v-else)
      div(v-for='ability in item.abilities', :key='ability.id')
        span.subject-content__section-subtitle 
          | {{ ability.item_amount }} &times; for 
          ability-link(:ability='ability') {{ ability.name }}
  
  section.content
    strong.subject-content__section-title Kill Drops
    template(v-if='!item.kill_drops.length')
      em Cannot be collected by killing monsters
    template(v-else)
      div(v-for='killDrop, index in item.kill_drops', :key='index')
        span.subject-content__section-subtitle 
          | {{ killDrop.amount }} &times; by killing  
          monster-link(:monster='killDrop.monster') {{ killDrop.monster.name }} 
          small(v-if='killDrop.rare') (rare)
  
  section.content
    strong.subject-content__section-title Steal Drops
    template(v-if='!item.steal_drops.length')
      em Cannot be collected by stealing from monsters
    template(v-else)
      div(v-for='stealDrop, index in item.steal_drops', :key='index')
        span.subject-content__section-subtitle 
          | {{ stealDrop.amount }} &times; from   
          monster-link(:monster='stealDrop.monster') {{ stealDrop.monster.name }} 
          small(v-if='stealDrop.rare') (rare)
  
  section.content
    strong.subject-content__section-title Bribe Drops
    template(v-if='!item.bribe_drops.length')
      em Cannot be collected by bribing monsters
    template(v-else)
      div(v-for='bribeDrop, index in item.bribe_drops', :key='index')
        span.subject-content__section-subtitle 
          | {{ bribeDrop.amount }} &times; from 
          monster-link(:monster='bribeDrop.monster') {{ bribeDrop.monster.name }} 
          | for {{ bribeDrop.cost.toLocaleString() }} Gil
  
  section.content
    strong.subject-content__section-title Mixes
    template(v-if='!item.mixes.length')
      em This item has no mixes
    .m-t-sm(v-else)
      .m-b-sm(v-for='mix in item.mixes', :key='mix.id')
        .subject-content__section-subtitle
          mix-link(:mix='mix') {{ mix.name }} 
          | - 
          small {{ mix.description }}
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'item',
      fetchKey: 'fetchItem'
    }
  },
  computed: {
    item() {
      return this.record
    }
  }
}
</script>
