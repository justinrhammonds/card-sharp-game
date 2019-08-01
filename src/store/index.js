import Vue from 'vue'
import Vuex from 'vuex'
import cards from '../data/cards';
import stages from '../data/stages';

Vue.use(Vuex);

const state = () => ({
  cards,
  stages,
  bonusType: "tries",
  score: 0,
  tries: 3,
  settings: {
    startingScore: 0,
    scoreAmount: 100,
    scoreBonus: 300,
    startingTries: 3,
    triesAmount: 1,
    triesBonus: 1,
    swap: 50,
  }
});

const getters = {

}

const actions = {
  
}

const mutations = {
  toggleBonusType(state) {
    state.bonusType = state.bonusType === "score" ? "tries" : "score";
  },
  updateTries(state, { increaseOrDecrease, amount }) {
    state.tries += (amount * increaseOrDecrease);
  },
  updateScore(state, { increaseOrDecrease, amount }) {
    state.score += (amount * increaseOrDecrease);
  },
  startOver(state) {
    state.score = state.settings.startingScore;
    state.tries = state.settings.startingTries;
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})