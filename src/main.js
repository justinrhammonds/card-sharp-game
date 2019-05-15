import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faStar, faDollarSign, faArrowUp, faArrowDown, faHeart, faRecycle, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/global.css'

library.add(
  faPlus, 
  faStar, 
  faDollarSign, 
  faArrowUp, 
  faArrowDown, 
  faHeart,
  faRecycle,
  faCog
  )

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
