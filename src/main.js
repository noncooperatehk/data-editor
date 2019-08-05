import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css' // This line here
import App from './App.vue'
import compDb from "./db/clientDb.js"
Object.defineProperty(Vue.prototype, '$compDb', { value: compDb });


Vue.config.productionTip = false
Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
}).$mount('#app')
