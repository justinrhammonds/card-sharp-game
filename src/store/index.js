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
  gameEnded: false,
  finalScore: 0,
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
  getCard: (state) => (position) => {
    return state.cards[position];
  },
  currentStage: (state) => {
    return state.stages[state.activeStageIndex];
  },
  isBonusStage: (state) => (stageId) => {
    return stageId === state.stages.length - 1
  }
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
  },
  flipTable({ commit, dispatch }, { delay }) {
    setTimeout(() => {
      commit("setActiveStageIndex", {
        amount: 0
      });
      commit("setSwapCardIndex", {
        amount: 6
      });
      commit("resetStages");
      dispatch("shuffleAndDeal");
    }, delay);
  },
  shuffleAndDeal({ commit }) {
    commit("shuffleCards");
    commit("dealStages");
  },
  recalculateScore({ commit, state }, { increaseOrDecrease, isSwap, isBonus }) {
    // if on a swap (also never have less than 0 points)
    if (isSwap && state.score > 0) {
      commit("updateScore", {
        increaseOrDecrease,
        amount: state.settings.swap
      });
    }
    // if on collect bonus
    if (
      !isSwap &&
      increaseOrDecrease > 0 &&
      state.score >= 0 &&
      isBonus
    ) {
      commit("updateScore", {
        increaseOrDecrease,
        amount: state.settings.scoreBonus
      });
    }
    // else if on correct guess
    else if (!isSwap && increaseOrDecrease > 0 && state.score >= 0) {
      commit("updateScore", {
        increaseOrDecrease,
        amount: state.settings.scoreAmount
      });
    }
  },
  endGame({ commit, state }) {
    commit("setGameEnded", { isEnded: true });
    commit("setFinalScore", { amount: state.score });
  },
  continueNewGame({ commit }) {
    commit("setGameEnded", { isEnded: false });
    setTimeout(commit("resetGame"), 1000);
  },
  recalculateTries({ commit, dispatch, state }, { increaseOrDecrease }) {
    if (state.tries === 0 && increaseOrDecrease < 0) {
      dispatch("endGame")
    } else {
    commit("updateTries", {
        increaseOrDecrease,
        amount: state.settings.triesAmount
      });
    }
  }
}

const mutations = {
  setFinalScore(state, { amount }) {
    state.finalScore = amount;
  },
  setGameEnded(state, { isEnded }) {
    state.gameEnded = isEnded;
  },
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
   },
   dealStages(state) {
    for (let i = 0; i < state.stages.length; i += 1) {
      state.stages[i].card = state.cards[i];
    }
  },
  setStageCard(state, { stageId, card }) {
    state.stages[stageId].card = card;
  },
  resetStages(state) {
    for (let i = 0; i < 4; i += 1) {
      state.stages[i].swaps = 1;
      state.stages[i].evaluation = null;
    }
  },

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})