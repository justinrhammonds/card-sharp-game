import Vue from "vue";
import App from "./App.vue";
import VueRouter from "./router";
import VueApollo from "vue-apollo";
import apollo from "./apollo/client";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Formerly, UI design was heavy on icons. Since it's not any longer, this should be replaced.
library.add(faStar, faHeart);
const apolloProvider = new VueApollo({
  defaultClient: apollo
});

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.prototype.$apollo = apollo;
Vue.use(VueApollo);

Vue.directive("focus", {
  // When the bound element is inserted into the DOM...
  inserted: function(el) {
    // Focus the element
    el.focus();
  }
});

new Vue({
  el: "#app",
  store,
  router: VueRouter,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
