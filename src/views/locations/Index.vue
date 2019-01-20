<template lang="pug">
div
  section
    h1.title Locations
    h2.is-size-6-mobile.subtitle Essential items you don't want to miss
  hr
  section.box
    .subject-content__input-group
      span.icon.is-medium.subject-content__input-group--icon
        span.fas.fa-search
      input.subject-content__input-group--input(
        v-model='search',
        type='text', 
        placeholder='Search for locations'
      )
  section.box.subject-content__list
    .subject-content__list-header {{ searchLabel }}

    div(v-if='!filteredLocations.length') Nothing here!
    location-link.subject-content__list-item(
      v-for='location in filteredLocations',
      :key='location.id'
      :location='location', 
      tag='div',
      v-else
    )
      .subject-content__list-item--information
        .subject-content__list-item--title {{ location.name }}
        .subject-content__list-item--subtitle {{ location.description }}
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
      stateKey: 'locations',
      fetchKey: 'fetchLocations'
    }
  },
  computed: {
    locations() {
      return this.records
    },
    searchLabel() {
      if (!this.search.trim()) {
        return 'All locations'
      }

      return `Locations matching "${this.search.trim()}"`
    },
    filteredLocations() {
      if (!this.search.trim()) {
        return this.locations
      }

      const searchTerm = this.search.trim().toLowerCase()
      const searchAttributes = ['name', 'description']

      return this.locations.filter((ability) => {
        return searchAttributes.some((attr) => ability[attr].toLowerCase().includes(searchTerm))
      })
    }
  }
}
</script>
