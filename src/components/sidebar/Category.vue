<template lang="pug">
</template>
<script>
export default {
  data() {
    return {
      expanded: false,
      timeoutFn: null,
      timeout: 50
    }
  },
  computed: {
    sectionToggleClass() {
      if (this.expanded) {
        return 'fas fa-chevron-down'
      }

      return 'fas fa-chevron-right'
    }
  },
  methods: {
    startPreload() {
      this.timeoutFn = setTimeout(() => {
        this.fetchData()
      }, this.timeout)
    },
    cancelPreload() {
      clearTimeout(this.timeoutFn)
    }
  }
}
</script>
