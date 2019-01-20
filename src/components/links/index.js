import MixLink from './MixLink.vue'
import ItemLink from './ItemLink.vue'
import AbilityLink from './AbilityLink.vue'
import MonsterLink from './MonsterLink.vue'
import KeyItemLink from './KeyItemLink.vue'
import LocationLink from './LocationLink.vue'

import PreloadLink from './../PreloadLink.vue'

// Formats in the way that Vue expects when globally importing components
// Note: All components need to have a "name" (which they should, anyway)
export default [MixLink, ItemLink, AbilityLink, MonsterLink, KeyItemLink, LocationLink, PreloadLink]
