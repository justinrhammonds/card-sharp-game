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
  swapCardIndex: 6,
  activeStageIndex: 0,
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
  awardBonus({ commit, state }) {
    if (state.bonusType === "score") {
      commit('updateScore', { 
        increaseOrDecrease: +1,
        amount: state.settings.scoreBonus
      })
    } else {
      commit('updateTries', { 
        increaseOrDecrease: +1,
        amount: state.settings.triesBonus
      })
    }
  }
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
  resetGame(state) {
    state.score = state.settings.startingScore;
    state.tries = state.settings.startingTries;
  },
  shuffleCards(state) {
    state.cards.forEach(card => card.order = Math.random());
    state.cards.sort((a, b) => {
      return a.order - b.order;
    });
  },
   setSwapCardIndex(state, { amount }) {
     state.swapCardIndex = amount;
   },
   setActiveStageIndex(state, { amount }) {
     state.activeStageIndex = amount;
   }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})