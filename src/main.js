import '../booststrap/dep/css/bootstrap.min.css'
import Vue from 'vue'
import * as uiv from 'uiv'
import App from './App.vue'

Vue.use(uiv);
new Vue({
  el: '#app',
  render: h => h(App)
})
