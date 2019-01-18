<template lang="pug">
preload-link(
  :path='dropdownItem.path',
  :fetch-params='fetchParams'
) {{ dropdownItem.name }}
//- li(
//-   @mouseover='startPreload', 
//-   @mouseout='cancelPreload',
//-   @touchstart='startPreload',
//-   @touchend='cancelPreload'
//- )
//-   router-link(:to='dropdownItem.path') {{ dropdownItem.name }}
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
    fetchParams: {
      type: Array,
      required: true
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
