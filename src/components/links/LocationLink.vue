<template lang="pug">
preload-link(:path='location.path', :fetch-params='fetchParams', :tag='tag')
  slot
</template>
<script>
export default {
  name: 'LocationLink',
  props: {
    location: {
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
      return ['fetchLocation', this.location.slug]
    }
  }
}
</script>
