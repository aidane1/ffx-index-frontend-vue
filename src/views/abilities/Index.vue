<template lang="pug">
div
  section
    h1.title Abilities
    h2.subtitle.is-size-6-mobile Skills, magic, and equipment effects
  hr
  section.box
    .subject-content__input-group
      span.icon.is-medium.subject-content__input-group--icon
        span.icon__search
      input.subject-content__input-group--input(
        v-model='search',
        type='text', 
        placeholder='Search for abilities'
      )
  section.box.subject-content__list
    .subject-content__list-header {{ searchLabel }}

    div(v-if='!filteredAbilities.length') Nothing here!
    ability-link.subject-content__list-item(
      v-for='ability in filteredAbilities',
      :key='ability.id'
      :ability='ability', 
      tag='div',
      v-else
    )
      .subject-content__list-item--information
        .subject-content__list-item--title {{ ability.name }}
        .subject-content__list-item--subtitle {{ ability.effect }}
      span.icon__chevron
</template>
<script>
import IndexBase from '../base/IndexBase'

export default {
  extends: IndexBase,
  data() {
    return {
      search: '',
      stateKey: 'abilities',
      fetchKey: 'fetchAbilities'
    }
  },
  computed: {
    abilities() {
      return this.records
    },
    searchLabel() {
      if (!this.search.trim()) {
        return 'All abilities'
      }

      return `Abilities matching "${this.search.trim()}"`
    },
    filteredAbilities() {
      const searchTerm = this.search.trim().toLowerCase()
      const searchAttributes = ['name', 'effect', 'ability_type']

      if (!searchTerm) {
        return this.abilities
      }

      return this.abilities.filter((ability) => {
        return searchAttributes.some((attr) => ability[attr].toLowerCase().includes(searchTerm))
      })
    }
  }
}
</script>
