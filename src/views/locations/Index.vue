<template lang="pug">
div
  section
    h1.title Locations
    h2.subtitle.is-size-6-mobile Brought to you by the Spira Tourism Board
  hr
  section.box
    .subject-content__input-group
      span.icon.is-medium.subject-content__input-group--icon
        span.icon__search
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
      span.icon__chevron
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
      const searchTerm = this.search.trim().toLowerCase()
      const searchAttributes = ['name', 'description']

      if (!searchTerm) {
        return this.locations
      }

      return this.locations.filter((ability) => {
        return searchAttributes.some((attr) => ability[attr].toLowerCase().includes(searchTerm))
      })
    }
  }
}
</script>
