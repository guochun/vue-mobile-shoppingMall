import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import fastClick from 'fastclick'

import {
  Button,
  Row,
  Col
} from 'vant'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(Button)
  .use(Row)
  .use(Col)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
