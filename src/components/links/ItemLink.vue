<template lang="pug">
preload-link(:path='item.path', :fetch-params='fetchParams')
  slot
</template>
<script>
export default {
  name: 'ItemLink',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    fetchParams() {
      return ['fetchItem', this.item.slug]
    }
  }
}
</script>
