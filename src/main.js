import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PreloadLinks from './components/links'

Vue.config.productionTip = false

PreloadLinks.forEach((preloadLink) => {
  Vue.component(...preloadLink)
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
