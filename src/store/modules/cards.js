let cards = [];
const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
const cardValues = {
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  queen: 12,
  king: 13,
  ace: 14,
}

// generate deck
suits.forEach((suit) => {
  Object.keys(cardValues).forEach((item) => {
    cards.push({
      suit: suit,
      name: item,
      value: cardValues[item]
    })
  })
});

const jokers = [
  { suit: "hearts", name: "red-joker", value: 0 },
  { suit: "spades", name: "black-joker", value: 0 },
];

cards = [...cards, ...jokers];

const state = {
  cards,
  swapCardIndex: 6,
};

const getters = {
  getCard: (state) => (position) => {
    return state.cards[position];
  },
}

const mutations = {
  shuffleCards(state) {
    state.cards.forEach(card => card.order = Math.random());
    state.cards.sort((a, b) => {
      return a.order - b.order;
    });
  },
  setSwapCardIndex(state, { amount }) {
    state.swapCardIndex = amount;
  },
}

export default  {
  state,
  getters,
  mutations
}