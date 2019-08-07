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
  finalScore: null,
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
  getStage: (state) => (id) => {
    return state.stages[id];
  },
  currentStage: (state) => {
    return state.stages[state.activeStageIndex];
  },
  isBonusStage: (state) => (stageId) => {
    return stageId === state.stages.length - 1;
  }
}

const actions = {
  awardBonus({ commit, state, getters, dispatch }) {
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
    if (getters.isBonusStage(getters.currentStage.id)) {
      dispatch("flipTable", { delay: 0 });
    } else {
      dispatch("swapJokerCard");
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
  },
  swapCard({ commit, dispatch, state, getters }) {
    commit("setStageCard", {
      stageId: getters.currentStage.id,
      card: getters.getCard(state.swapCardIndex)
    });
    commit("setSwapCardIndex", {
      amount: state.swapCardIndex + 1
    });
    commit("decrementStageSwaps", { stageId: getters.currentStage.id });
    dispatch("recalculateScore", {
      increaseOrDecrease: -1,
      isSwap: true,
      isBonus: false
    });
  },
  swapJokerCard({ commit, state, getters }) {
    commit("setStageCard", {
      stageId: getters.currentStage.id,
      card: getters.getCard(state.swapCardIndex)
    });
    commit("setSwapCardIndex", {
      amount: state.swapCardIndex + 1
    });
  },
  advanceStageAndEvaluate({ commit, state, getters, dispatch }, { prediction }) {
    const previousCardValue = state.stages[state.activeStageIndex].card.value;
    
    // advance stage
    commit("setActiveStageIndex", {
      amount: state.activeStageIndex + 1
    });

    // evaluate
    if (prediction === "higher") {
      commit("setStageEvaluation", {
        stageId: getters.currentStage.id,
        evaluation: getters.currentStage.card.value < previousCardValue
      });
    } 

    if (prediction === "lower") {
      commit("setStageEvaluation", {
        stageId: getters.currentStage.id,
        evaluation: getters.currentStage.card.value < previousCardValue
      });
    }

    // joker will always evaluate to true
    if (getters.currentStage.card.value === 0) {
      commit("setStageEvaluation", {
        stageId: getters.currentStage.id,
        evaluation: true
      });
    } 

    // if not bonus stage, prediction was correct, and wasn't joker, award points
    if (
      !getters.isBonusStage(getters.currentStage.id) &&
      getters.currentStage.evaluation &&
      getters.currentStage.card.value !== 0
    ) {
      dispatch("recalculateScore", {
        increaseOrDecrease: +1,
        isSwap: false,
        isBonus: false
      });
    }

    // if not bonus stage, and prediction was incorrect, lose a try and reset rows
    if (
      !getters.isBonusStage(getters.currentStage.id) &&
      !getters.currentStage.evaluation
    ) {
      dispatch("recalculateTries", { increaseOrDecrease: -1 });
      dispatch("flipTable", { delay: 1000 });
    }

    // if bonus stage, and prediction was incorrect, reset rows
    if (getters.isBonusStage(getters.currentStage.id) && !getters.currentStage.evaluation) {
      dispatch("flipTable", { delay: 1000 });
    }
  },
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
    state.stages.forEach((stage) => {
      stage.id < (state.stages.length - 2) ? stage.swaps = 1 : stage.swaps = 0;
      stage.evaluation = null;
    });
  },
  decrementStageSwaps(state, { stageId }) {
    state.stages[stageId].swaps -= 1;
  },
  setStageEvaluation(state, {stageId, evaluation }) {
    state.stages[stageId].evaluation = evaluation;
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})