<template lang="pug">
.m-b-md(v-if='keyItem')
  section
    h1.title {{ keyItem.name }}
    h2.subtitle {{ keyItem.description }}
  hr
  section.content
    strong.subject-content__section-title Details
    span.subject-content__section-subtitle {{ keyItem.details }} 
</template>
<script>
import ShowBase from '../base/ShowBase.vue'

export default {
  extends: ShowBase,
  data() {
    return {
      stateKey: 'keyItem',
      fetchKey: 'fetchKeyItem'
    }
  },
  computed: {
    keyItem() {
      return this.record
    }
  }
}
</script>
