<template lang="pug">
div
  section
    h1.title Items
    h2.is-size-6-mobile.subtitle Items can help you, hurt enemies, and improve equipment
  hr
  section.box
    .subject-content__input-group
      span.icon.is-medium.subject-content__input-group--icon
        span.fas.fa-search
      input.subject-content__input-group--input(
        v-model='search',
        type='text', 
        placeholder='Search for items'
      )
  section.box.subject-content__list
    .subject-content__list-header {{ searchLabel }}

    div(v-if='!filteredItems.length') Nothing here!
    item-link.subject-content__list-item(
      v-for='item in filteredItems',
      :key='item.id'
      :item='item', 
      tag='div',
      v-else
    )
      .subject-content__list-item--information
        .subject-content__list-item--title {{ item.name }}
        .subject-content__list-item--subtitle {{ item.effect }}
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
      stateKey: 'items',
      fetchKey: 'fetchItems'
    }
  },
  computed: {
    items() {
      return this.records
    },
    searchLabel() {
      if (!this.search.trim()) {
        return 'All items'
      }

      return `Items matching "${this.search.trim()}"`
    },
    filteredItems() {
      if (!this.search.trim()) {
        return this.items
      }

      const searchTerm = this.search.trim().toLowerCase()
      const searchAttributes = ['name', 'effect', 'effect_type']

      return this.items.filter((item) => {
        return searchAttributes.some((attr) => item[attr].toLowerCase().includes(searchTerm))
      })
    }
  }
}
</script>
