<template lang="pug">
.m-b-md(v-if='location')
  section
    h1.title {{ location.name }}
  hr
  section.content
    strong.subject-content__section-title Key Items
    template(v-if='!location.key_items.length')
      em No key items
    template(v-else)
      div(v-for='keyItem in location.key_items', :key='keyItem.id')
        span.subject-content__section-subtitle 
          key-item-link(:key-item='keyItem') {{ keyItem.name }}

  section.content
    strong.subject-content__section-title Monsters
    template(v-if='!location.monsters.length')
      em No monsters
    template(v-else)
      div(v-for='monster in location.monsters', :key='monster.id')
        span.subject-content__section-subtitle 
          monster-link(:monster='monster') {{ monster.name }}
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'location',
      fetchKey: 'fetchLocation'
    }
  },
  computed: {
    location() {
      return this.record
    }
  }
}
</script>
