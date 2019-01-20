<template lang="pug">
preload-link(:path='ability.path', :fetch-params='fetchParams', :tag='tag')
  slot
</template>
<script>
export default {
  name: 'AbilityLink',
  props: {
    ability: {
      type: Object,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    }
  },
  computed: {
    fetchParams() {
      return ['fetchAbility', this.ability.slug]
    }
  }
}
</script>
