import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/global.css'
 
// Formerly, UI design was heavy on icons. Since it's not any longer, this should be replaced.
library.add(faStar, faHeart);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: VueRouter,
  render: h => h(App),
}).$mount('#app');
