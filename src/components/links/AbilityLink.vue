<template lang="pug">
preload-link(:path='ability.path', :fetch-params='fetchParams')
  slot
</template>
<script>
export default {
  name: 'AbilityLink',
  props: {
    ability: {
      type: Object,
      required: true
    }
  },
  computed: {
    fetchParams() {
      return ['fetchAbility', this.ability.slug]
    }
  }
}
</script>
