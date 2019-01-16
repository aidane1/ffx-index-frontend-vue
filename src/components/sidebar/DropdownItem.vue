<template lang="pug">
li(
  @mouseover='startPreload', 
  @mouseout='cancelPreload',
  @touchstart='startPreload',
  @touchend='cancelPreload'
)
  router-link(:to='dropdownItem.path') {{ dropdownItem.name }}
</template>
<script>
export default {
  data() {
    return {
      timeoutFn: null,
      timeout: 70
    }
  },
  props: {
    dropdownItem: {
      type: Object,
      default: () => {}
    },
    fetchFn: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    startPreload() {
      this.timeoutFn = setTimeout(() => {
        this.fetchFn(this.dropdownItem.slug)
      }, this.timeout)
    },
    cancelPreload() {
      clearTimeout(this.timeoutFn)
    }
  }
}
</script>
