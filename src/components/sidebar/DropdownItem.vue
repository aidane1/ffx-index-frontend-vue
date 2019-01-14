<template lang="pug">
li(@mouseover='startPreload', @mouseout='cancelPreload')
  router-link(:to='dropdownItem.path') {{ label }}
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
    label: {
      type: String,
      default: ''
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
