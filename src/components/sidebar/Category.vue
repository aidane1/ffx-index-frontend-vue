<template lang="pug">
//- This cant use the preload-link component since we are specifying
//- the preload and the link on separate parts
li( 
  @mouseover='startPreload', 
  @mouseout='cancelPreload',
  @touchstart='startPreload',
  @touchend='cancelPreload'
)
  router-link(:to='{ name: displayData.route }') {{ displayData.name }}
    span.sidebar__dropdown-arrow(
      :class='sectionToggleClass', 
      @click.prevent='expanded = !expanded'
    )
  ul(v-show='expanded')
    dropdown-item(
       v-for='record in records',
      :key='record.id',
      :dropdown-item='record',
      :label='record.name',
      :fetch-params='dropdownFetchParams(record.slug)'
    )
</template>
<script>
import DropdownItem from './DropdownItem'

export default {
  data() {
    return {
      expanded: false,
      timeoutFn: null,
      timeout: 50
    }
  },
  props: {
    records: {
      type: Array,
      required: true
    },
    fetchIndexFn: {
      type: Function,
      required: true
    },
    dropdownFetchParams: {
      type: Function,
      required: true
    },
    displayData: {
      type: Object,
      required: true
    }
  },
  computed: {
    sectionToggleClass() {
      if (this.expanded) {
        return 'icon__chevron icon__chevron--down'
      }

      return 'icon__chevron'
    }
  },
  methods: {
    startPreload() {
      this.timeoutFn = setTimeout(() => {
        this.fetchIndexFn()
      }, this.timeout)
    },
    cancelPreload() {
      clearTimeout(this.timeoutFn)
    }
  },
  components: {
    DropdownItem
  }
}
</script>
