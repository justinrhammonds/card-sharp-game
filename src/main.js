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

const routes = {
  '/': App,
}

new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponent) }
})
