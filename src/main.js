import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css' // This line here
import App from './App.vue'
import compDb from "./db/clientDb.js"
import VueRouter from 'vue-router'
import SearchCompany from './components/SearchCompany.vue'

Object.defineProperty(Vue.prototype, '$compDb', {value: compDb});

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueRouter);

const Bar = {template: '<div>This is form of {{ $route.params.id }}</div>'} //TODO: remove vue.config.js real time config after you remove this

const router = new VueRouter({
  mode: 'history',
  base: "/", //TODO: change this to github page url in production mode.
  routes: [
    {path: '/', name: 'search', component: SearchCompany},
    {path: '/company/:id', name: 'updateCompanyDetail', component: Bar}
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
