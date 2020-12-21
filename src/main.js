import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css';
import filter from '@/utils/filter'
import 'amfe-flexible'
// import '@/utils/rem'
import plugin from '@/utils/plugin'
import "./assets/iconfont/iconfont.css";
import './assets/css/common.css'
import './assets/css/reset.css'

for (const key in filter) {
  Vue.filter(key, filter[key])
}

Vue.use(Vant)
Vue.use(plugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
