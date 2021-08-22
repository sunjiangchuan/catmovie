import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './common/header'
Vue.config.productionTip = false
Vue.component("Header", Header)
Vue.filter("topath", (val, params) => {
  var reg = /w\.h/;
  return val.replace(reg, params)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')