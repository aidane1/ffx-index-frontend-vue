<template lang="pug">
preload-link(:path='mix.path', :fetch-params='fetchParams', :tag='tag')
  slot
</template>
<script>
export default {
  name: 'MixLink',
  props: {
    mix: {
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
      return ['fetchMix', this.mix.slug]
    }
  }
}
</script>
