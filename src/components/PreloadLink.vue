<template lang="pug">
router-link(
  :to='path',
  :tag='tag',
  @mouseover.native='startPreload',
  @mouseout.native='cancelPreload',
  @touchstart.native='startPreload',
  @touchend.native='cancelPreload'
)
  slot
</template>
<script>
export default {
  name: 'PreloadLink',
  data() {
    return {
      timeoutFn: null
    }
  },
  props: {
    path: {
      type: [String, Object],
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    fetchParams: {
      type: Array,
      required: true
    },
    timeout: {
      type: Number,
      default: 50
    }
  },
  methods: {
    startPreload() {
      this.timeoutFn = setTimeout(() => {
        this.$store.dispatch(...this.fetchParams)
      }, this.timeout)
    },
    cancelPreload() {
      clearTimeout(this.timeoutFn)
    }
  }
}
</script>
