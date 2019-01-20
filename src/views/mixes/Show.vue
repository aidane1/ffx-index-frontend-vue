<template lang="pug">
.m-b-md(v-if='mix')
  section
    h1.title {{ mix.name }}
    h2.subtitle.is-size-6-mobile {{ mix.description }}
  hr
  section.content
    strong.subject-content__section-title Combinations
    .columns
      .column.is-two-thirds-desktop
        section.box.m-t-md
          .subject-content__input-group
            span.icon.is-medium.subject-content__input-group--icon
              span.fas.fa-search
            input.subject-content__input-group--input(
              v-model='search',
              type='text', 
              placeholder='Search for combinations'
            )
        template(v-if='!filteredCombinations.length')
          em No combinations
        table.table.is-hoverable.subject-content__section-table(v-else)
          thead
            tr
              th Item One
              th Item Two
          tbody
            tr(v-for='combination, index in filteredCombinations', :key='index')
              td 
                item-link(:item='combination.item_one') {{ combination.item_one.name}}
              td 
                item-link(:item='combination.item_two') {{ combination.item_two.name}}
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      search: '',
      stateKey: 'mix',
      fetchKey: 'fetchMix'
    }
  },
  computed: {
    mix() {
      return this.record
    },
    filteredCombinations() {
      const searchTerm = this.search.trim().toLowerCase()

      if (!searchTerm) {
        return this.mix.combinations
      }

      return this.mix.combinations.filter((combination) => {
        return (
          combination.item_one.name.toLowerCase().includes(searchTerm) ||
          combination.item_two.name.toLowerCase().includes(searchTerm)
        )
      })
    }
  }
}
</script>
