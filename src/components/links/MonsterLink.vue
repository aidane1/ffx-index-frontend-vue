<template lang="pug">
preload-link(:path='monster.path', :fetch-params='fetchParams')
  slot
</template>
<script>
export default {
  name: 'MonsterLink',
  props: {
    monster: {
      type: Object,
      required: true
    }
  },
  computed: {
    fetchParams() {
      return ['fetchMonster', this.monster.slug]
    }
  }
}
</script>
