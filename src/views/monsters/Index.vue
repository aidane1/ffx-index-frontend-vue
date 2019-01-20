<template lang="pug">
div
  section
    h1.title Monsters
    h2.subtitle.is-size-6-mobile Brought to you by the Spira Tourism Board
  hr
  section.box
    .subject-content__input-group
      span.icon.is-medium.subject-content__input-group--icon
        span.fas.fa-search
      input.subject-content__input-group--input(
        v-model='search',
        type='text', 
        placeholder='Search for monsters'
      )
  section.box.subject-content__list
    .subject-content__list-header {{ searchLabel }}

    div(v-if='!filteredMonsters.length') Nothing here!
    monster-link.subject-content__list-item(
      v-for='monster in filteredMonsters',
      :key='monster.id'
      :monster='monster', 
      tag='div',
      v-else
    )
      .subject-content__list-item--information
        .subject-content__list-item--title {{ monster.name }}
        .subject-content__list-item--subtitle {{ monster.description }}
      .subject-content__list-item--icon
        span.fas.fa-chevron-right
</template>
<script>
import IndexBase from '../base/IndexBase'

export default {
  extends: IndexBase,
  data() {
    return {
      search: '',
      stateKey: 'monsters',
      fetchKey: 'fetchMonsters'
    }
  },
  computed: {
    monsters() {
      return this.records
    },
    searchLabel() {
      if (!this.search.trim()) {
        return 'All monsters'
      }

      return `Monsters matching "${this.search.trim()}"`
    },
    filteredMonsters() {
      const searchTerm = this.search.trim().toLowerCase()
      const searchAttributes = ['name']

      if (!searchTerm) {
        return this.monsters
      }

      return this.monsters.filter((ability) => {
        return searchAttributes.some((attr) => ability[attr].toLowerCase().includes(searchTerm))
      })
    }
  }
}
</script>
