<template lang="pug">
div
  section
    h1.title Items
    h2.subtitle.is-size-6-mobile Items can help you, hurt enemies, and improve equipment
  hr
  section.box
    .subject-content__input-group
      span.icon.is-medium.subject-content__input-group--icon
        span.icon__search
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
      span.icon__chevron
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
      const searchTerm = this.search.trim().toLowerCase()
      const searchAttributes = ['name', 'effect', 'effect_type']

      if (!searchTerm) {
        return this.items
      }

      return this.items.filter((item) => {
        return searchAttributes.some((attr) => item[attr].toLowerCase().includes(searchTerm))
      })
    }
  }
}
</script>
