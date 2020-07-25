import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/clearStyle.css';
import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe';
import 'swiper/swiper-bundle.css'

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
