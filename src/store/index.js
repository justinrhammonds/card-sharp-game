import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = () => ({
  bonusType: "tries"
});

const getters = {

}

const actions = {

}

const mutations = {
  toggleBonusType(state) {
    if (state.bonusType === "score") {
      state.bonusType = "tries";
    } else {
      state.bonusType = "score";
    }
  },
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})