<template lang="pug">
preload-link(:path='monster.path', :fetch-params='fetchParams', :tag='tag')
  slot
</template>
<script>
export default {
  name: 'MonsterLink',
  props: {
    monster: {
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
      return ['fetchMonster', this.monster.slug]
    }
  }
}
</script>
