<template lang="pug">
preload-link(
  :path='dropdownItem.path',
  :fetch-params='fetchParams'
) {{ dropdownItem.name }}
</template>
<script>
export default {
  props: {
    dropdownItem: {
      type: Object,
      default: () => {}
    },
    fetchParams: {
      type: Array,
      required: true
    }
  }
}
</script>
