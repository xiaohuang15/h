import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/index.css'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  render: createElement => createElement(App)
}).$mount('#app')
