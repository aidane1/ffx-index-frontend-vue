<template lang="pug">
preload-link(:path='item.path', :fetch-params='fetchParams', :tag='tag')
  slot
</template>
<script>
export default {
  name: 'ItemLink',
  props: {
    item: {
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
      return ['fetchItem', this.item.slug]
    }
  }
}
</script>
