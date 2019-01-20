<template lang="pug">
.m-b-md(v-if='monster')
  section
    h1.title {{ monster.name }}
      small.subject-content__title--secondary(v-if='monster.boss') (boss)
    h2.subtitle.is-size-6-mobile
      | {{ monster.ap.toLocaleString() }} AP - 
      | {{ monster.gil.toLocaleString() }} Gil
  hr

  .columns
    .column.is-one-third-desktop
      section.content
        strong.subject-content__section-title Offensive Stats
        table.table.is-half-td.is-hoverable.subject-content__section-table
          tbody
            tr  
              td 
                strong HP 
                small (Overkill)
              td {{ monster.health.toLocaleString() }} 
                small ({{ monster.overkill.toLocaleString() }})
            tr  
              td 
                strong MP
              td {{ monster.mp }}
            tr  
              td 
                strong Strength
              td {{ monster.strength }}
            tr  
              td 
                strong Magic
              td {{ monster.magic }}
            tr  
              td 
                strong Accuracy
              td {{ monster.accuracy }}
            tr  
              td 
                strong Luck
              td {{ monster.luck }}

    .column.is-one-third-desktop
      section.content
        strong.subject-content__section-title Defensive Stats
        table.table.is-half-td.is-hoverable.subject-content__section-table
          tbody
            tr
              td
                strong Defense
              td {{ monster.defense }}
            tr
              td 
                strong Magic Defense
              td {{ monster.magic_defense }}
            tr
              td 
                strong Agility
              td {{ monster.agility }}
            tr
              td 
                strong Evasion
              td {{ monster.evasion }}

    .column.is-one-third-desktop
      section.content
        strong.subject-content__section-title Elemental Affinities
        table.table.is-half-td.is-hoverable.subject-content__section-table
          tbody
            tr
              td
                strong Fire
              td {{ elementalAffinityLabel(monster.elements.fire) }}
            tr
              td 
                strong Ice
              td {{ elementalAffinityLabel(monster.elements.ice) }}
            tr
              td 
                strong Thunder
              td {{ elementalAffinityLabel(monster.elements.thunder) }}
            tr
              td 
                strong Water
              td {{ elementalAffinityLabel(monster.elements.water) }}

  section.content
    strong.subject-content__section-title Locations
    div(v-for='location in monster.locations', :key='location.id')
      span.subject-content__section-subtitle 
        location-link(:location='location') {{ location.name }}
  
  section.content
    strong.subject-content__section-title Skills
    template(v-if='!monster.skills')
      em No special skills
    template(v-else)
      | {{ monster.skills }}

  section.content
    strong.subject-content__section-title Kill Drops
    template(v-if='!monster.kill_drops.length')
      em No kill drops
    template(v-else)
      div(v-for='killDrop, index in monster.kill_drops', :key='index')
        span.subject-content__section-subtitle 
          | {{ killDrop.amount }} &times; 
          item-link(:item='killDrop') {{ killDrop.name }} 
          small(v-if='killDrop.rare') (rare)

  section.content
    strong.subject-content__section-title Steal Drops
    template(v-if='!monster.steal_drops.length')
      em No steal drops
    template(v-else)
      div(v-for='stealDrop, index in monster.steal_drops', :key='index')
        span.subject-content__section-subtitle 
          | {{ stealDrop.amount }} &times; 
          item-link(:item='stealDrop') {{ stealDrop.name }} 
          small(v-if='stealDrop.rare') (rare)

  section.content
    strong.subject-content__section-title Bribe Drop
    template(v-if='!monster.bribe_drop')
      em No bribe drop
    template(v-else)
      span.subject-content__section-subtitle 
        | {{ monster.bribe_drop.amount }} &times; 
        item-link(:item='monster.bribe_drop') {{ monster.bribe_drop.name }} 
        | for {{ monster.bribe_drop.cost.toLocaleString() }} Gil

  section.content
    strong.subject-content__section-title Armour Drops
    template(v-if='!monster.drop_abilities.armours.length')
      em No armour drops
    template(v-else)
      div(v-for='armourDrop, index in monster.drop_abilities.armours', :key='index')
        span.subject-content__section-subtitle 
          ability-link(:ability='armourDrop') {{ armourDrop.name }}

  section.content
    strong.subject-content__section-title Weapon Drops
    template(v-if='!monster.drop_abilities.weapons.length')
      em No weapon drops
    template(v-else)
      div(v-for='weaponDrop, index in monster.drop_abilities.weapons', :key='index')
        span.subject-content__section-subtitle 
          ability-link(:ability='weaponDrop') {{ weaponDrop.name }}

</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'monster',
      fetchKey: 'fetchMonster'
    }
  },
  computed: {
    monster() {
      return this.record
    }
  },
  methods: {
    elementalAffinityLabel(affinity) {
      switch (affinity) {
        case 0:
          return 'Immune/Absorb'
        case 0.5:
          return 'Resistant'
        case 1:
          return 'Normal'
        case 2:
          return 'Weak'
        default:
          return 'Normal'
      }
    }
  }
}
</script>
