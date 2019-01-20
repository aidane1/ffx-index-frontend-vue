<template lang="pug">
div
  section
    h1.title Mixes
    h2.subtitle.is-size-6-mobile Powerful effects from combining items
  hr
  section.box
    .subject-content__input-group
      span.icon.is-medium.subject-content__input-group--icon
        span.fas.fa-search
      input.subject-content__input-group--input(
        v-model='search',
        type='text', 
        placeholder='Search for mixes'
      )
  section.box.subject-content__list
    .subject-content__list-header {{ searchLabel }}

    div(v-if='!filteredMixes.length') Nothing here!
    mix-link.subject-content__list-item(
      v-for='mix in filteredMixes',
      :key='mix.id'
      :mix='mix', 
      tag='div',
      v-else
    )
      .subject-content__list-item--information
        .subject-content__list-item--title {{ mix.name }}
        .subject-content__list-item--subtitle {{ mix.description }}
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
      stateKey: 'mixes',
      fetchKey: 'fetchMixes'
    }
  },
  computed: {
    mixes() {
      return this.records
    },
    searchLabel() {
      if (!this.search.trim()) {
        return 'All mixes'
      }

      return `Mixes matching "${this.search.trim()}"`
    },
    filteredMixes() {
      const searchTerm = this.search.trim().toLowerCase()
      const searchAttributes = ['name', 'description']

      if (!searchTerm) {
        return this.mixes
      }

      return this.mixes.filter((ability) => {
        return searchAttributes.some((attr) => ability[attr].toLowerCase().includes(searchTerm))
      })
    }
  }
}
</script>
