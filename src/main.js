import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PreloadLinks from './components/links'

PreloadLinks.forEach((preloadLink) => {
  Vue.component(preloadLink.name, preloadLink)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
