import Vue from 'vue'
import App from './App.vue'
import { ModalPlugin, BButton } from 'bootstrap-vue/es/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/global.css'
 
// Formerly, UI design was heavy on icons. Since it's not any longer, this should be replaced.
library.add(faStar);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('b-button', BButton);
Vue.use(ModalPlugin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
