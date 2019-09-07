import Vue from "vue";
import Vuex from "vuex";
import cards from "./cards";
import stages from "./stages";
import leaderboard from "./mockLeaderboard";

Vue.use(Vuex);

const state = () => ({
  cards,
  stages,
  score: 0,
  tries: 3,
  swapCardIndex: 6,
  activeStageIndex: 0,
  gameEnded: false,
  finalScore: null,
  settings: {
    startingScore: 0,
    startingTries: 3,
    triesAmount: 1,
    baseStreakBonus: 100,
    baseSwapPenalty: 50
  },
  leaderboard,
  streakBonus: 100,
  swapPenalty: 50
});

const getters = {
  getCard: state => position => {
    return state.cards[position];
  },
  getStage: state => id => {
    return state.stages[id];
  },
  currentStage: state => {
    return state.stages[state.activeStageIndex];
  },
  isBonusStage: state => stageId => {
    return stageId === state.stages.length - 1;
  }
};

const actions = {
  awardBonus({ commit, state, getters, dispatch }) {
    commit("updateTries", {
      increaseOrDecrease: +1,
      amount: state.settings.triesAmount
    });
    commit("updateScore", {
      increaseOrDecrease: +1,
      amount: state.streakBonus
    });
    commit("setStreakBonus", {
      amount: state.streakBonus + state.settings.baseStreakBonus
    });
    if (getters.isBonusStage(getters.currentStage.id)) {
      dispatch("flipTable", { delay: 0 });
    } else {
      dispatch("swapCard");
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
  recalculateScore({ commit, state }, { increaseOrDecrease, isSwap }) {
    // if on a swap (also never have less than 0 points)
    if (isSwap && state.score > 0) {
      commit("updateScore", {
        increaseOrDecrease,
        amount: state.swapPenalty
      });
      commit("setSwapPenalty", {
        amount: state.swapPenalty + state.settings.baseSwapPenalty
      });
    }
    // else if on correct guess
    else if (!isSwap && increaseOrDecrease > 0 && state.score >= 0) {
      commit("updateScore", {
        increaseOrDecrease,
        amount: state.streakBonus
      });
      commit("setStreakBonus", {
        amount: state.streakBonus + state.settings.baseStreakBonus
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
      dispatch("endGame");
    } else {
      commit("updateTries", {
        increaseOrDecrease,
        amount: state.settings.triesAmount
      });
    }
  },
  swapCardForPenalty({ commit, dispatch, state, getters }) {
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
      isSwap: true
    });
  },
  swapCard({ commit, state, getters }) {
    commit("setStageCard", {
      stageId: getters.currentStage.id,
      card: getters.getCard(state.swapCardIndex)
    });
    commit("setSwapCardIndex", {
      amount: state.swapCardIndex + 1
    });
  },
  advanceStageAndEvaluate(
    { commit, state, getters, dispatch },
    { prediction }
  ) {
    const previousCardValue = state.stages[state.activeStageIndex].card.value;

    // advance stage
    commit("setActiveStageIndex", {
      amount: state.activeStageIndex + 1
    });

    // evaluate
    if (prediction === "higher") {
      commit("setStageEvaluation", {
        stageId: getters.currentStage.id,
        evaluation: getters.currentStage.card.value > previousCardValue
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
        isSwap: false
      });
    }

    // if not bonus stage, and prediction was incorrect, lose a try and reset rows
    if (
      !getters.isBonusStage(getters.currentStage.id) &&
      !getters.currentStage.evaluation
    ) {
      dispatch("recalculateTries", { increaseOrDecrease: -1 });
      dispatch("resetBonusPenaltyIncrements");
      dispatch("flipTable", { delay: 1000 });
    }

    // if bonus stage, and prediction was incorrect, reset rows
    if (
      getters.isBonusStage(getters.currentStage.id) &&
      !getters.currentStage.evaluation
    ) {
      dispatch("flipTable", { delay: 1000 });
    }
  },
  resetBonusPenaltyIncrements({ commit }) {
    commit("setStreakBonus", {
      amount: 100
    });
    commit("setSwapPenalty", {
      amount: 50
    });
  }
};

const mutations = {
  setSwapPenalty(state, { amount }) {
    state.swapPenalty = amount;
  },
  setStreakBonus(state, { amount }) {
    state.streakBonus = amount;
  },
  setFinalScore(state, { amount }) {
    state.finalScore = amount;
  },
  setGameEnded(state, { isEnded }) {
    state.gameEnded = isEnded;
  },
  updateTries(state, { increaseOrDecrease, amount }) {
    state.tries += amount * increaseOrDecrease;
  },
  updateScore(state, { increaseOrDecrease, amount }) {
    state.score += amount * increaseOrDecrease;
  },
  resetGame(state) {
    state.swapPenalty = state.settings.baseSwapPenalty;
    state.scoreBonus = state.settings.startingScoreBonus;
    state.score = state.settings.startingScore;
    state.tries = state.settings.startingTries;
  },
  shuffleCards(state) {
    state.cards.forEach(card => (card.order = Math.random()));
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
    state.stages.forEach(stage => {
      stage.id < state.stages.length - 2
        ? (stage.swaps = 1)
        : (stage.swaps = 0);
      stage.evaluation = null;
    });
  },
  decrementStageSwaps(state, { stageId }) {
    state.stages[stageId].swaps -= 1;
  },
  setStageEvaluation(state, { stageId, evaluation }) {
    state.stages[stageId].evaluation = evaluation;
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
