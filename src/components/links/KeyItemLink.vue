<template lang="pug">
preload-link(:path='keyItem.path', :fetch-params='fetchParams', :tag='tag')
  slot
</template>
<script>
export default {
  name: 'KeyItemLink',
  props: {
    keyItem: {
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
      return ['fetchKeyItem', this.keyItem.slug]
    }
  }
}
</script>
