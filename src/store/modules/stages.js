const stages = [];
const totalStages = 6;

for (let index = 0; index < totalStages; index++) {
  stages.push({
    id: index,
    swaps: index <= (totalStages - 2) ? 1 : 0,
    card: null
  });
}

const state = {
  stages,
  activeStageIndex: 0,
}

const getters = {
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
}

const mutations = {

}

export default  {
  state,
  getters,
  actions,
  mutations
}