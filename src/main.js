import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css' // This line here
import compDb from "./db/clientDb.js"
import VueRouter from 'vue-router'

Object.defineProperty(Vue.prototype, '$compDb', {value: compDb});

//components
import App from './App.vue'
import SearchCompany from './components/SearchCompany.vue'
import FrontMatter from "./components/CompanyForm";

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueRouter);

const EditorComponent = {
  template: '<div>This should be a markdown editor for company: {{ $route.params.id }} like <a href="https://stackedit.io/app#">this</a></div>'
} //TODO: remove vue.config.js real time config after you remove this
const baseUrl = process.env.NODE_ENV === 'production' ? '/data-editor/' : '/';

const router = new VueRouter({
  mode: 'history',
  base: baseUrl, //TODO: change this to github page url in production mode.
  routes: [
    {path: '/', name: 'search', component: SearchCompany},
    {path: '/company/:id/detail', name: 'companyDetail', component: EditorComponent},
    {path: '/company/:id/front-matter', name: 'frontMatter', component: FrontMatter}
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
