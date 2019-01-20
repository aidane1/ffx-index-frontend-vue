<template lang="pug">
div
  section
    h1.title Key Items
    h2.subtitle.is-size-6-mobile Essential items you don't want to miss
  hr
  section.box
    .subject-content__input-group
      span.icon.is-medium.subject-content__input-group--icon
        span.fas.fa-search
      input.subject-content__input-group--input(
        v-model='search',
        type='text', 
        placeholder='Search for key items'
      )
  section.box.subject-content__list
    .subject-content__list-header {{ searchLabel }}

    div(v-if='!filteredKeyItems.length') Nothing here!
    key-item-link.subject-content__list-item(
      v-for='keyItem in filteredKeyItems',
      :key='keyItem.id'
      :key-item='keyItem', 
      tag='div',
      v-else
    )
      .subject-content__list-item--information
        .subject-content__list-item--title {{ keyItem.name }}
        .subject-content__list-item--subtitle {{ keyItem.description }}
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
      stateKey: 'keyItems',
      fetchKey: 'fetchKeyItems'
    }
  },
  computed: {
    keyItems() {
      return this.records
    },
    searchLabel() {
      if (!this.search.trim()) {
        return 'All key items'
      }

      return `Key items matching "${this.search.trim()}"`
    },
    filteredKeyItems() {
      const searchTerm = this.search.trim().toLowerCase()
      const searchAttributes = ['name', 'description']

      if (!searchTerm) {
        return this.keyItems
      }

      return this.keyItems.filter((ability) => {
        return searchAttributes.some((attr) => ability[attr].toLowerCase().includes(searchTerm))
      })
    }
  }
}
</script>
