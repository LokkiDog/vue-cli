import Vue from 'vue'
import App from './App.vue'

import router from './routes'
import store from './store/store' 
import Axios from 'axios'
import Vuelidate from 'vuelidate'

// Plugins
Vue.use(Vuelidate)

import './assets/scss/main.scss'

Vue.config.productionTip = false
 
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
