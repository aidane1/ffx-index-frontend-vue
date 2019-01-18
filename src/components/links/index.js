import ItemLink from './ItemLink.vue'
import PreloadLink from './../PreloadLink.vue'

// Formats in the way that Vue expects when globally importing components
// Note: All components need to have a "name" (which they should, anyway)
export default [[ItemLink.name, ItemLink], [PreloadLink.name, PreloadLink]]
