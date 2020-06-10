// Import App from App.vue and render it in the new Vue instance and mount it to 
// an element with the id of "app" in the index.html. 

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
