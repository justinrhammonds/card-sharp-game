import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/**
 * Initial, empty state for the module.
 *
 * @type {Object}
 */
const state = () => ({
  shuffleSeed: Math.random(),
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  cardNames: {
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "jack": 11,
    "queen": 12,
    "king": 13,
    "ace": 14,
  },
  jokers: [
    { suit: "hearts", name: "red-joker", value: 0 },
    { suit: "spades", name: "black-joker", value: 0 },
  ]
});

/**
 * Getters for the object, these are like computed properties.
 *
 * @type {Object}
 */
const getters = {
  cards (state) {
    let cards = [];

    state.suits.forEach((suit) => {
      Object.keys(state.cardNames).forEach((name, value) => {
        cards.push({
          suit: suit,
          name: name,
          value: value,
          order: Math.random() / state.shuffleSeed
        })
      })
    });

    // append the jokers
    cards = cards.concat(state.jokers);

    // shuffle the deck
    cards.sort((a, b) => {
      return a.order - b.order;
    });

    return cards;
  }
}

/**
 * Actions for this module. This is where all async should take place.
 *
 * @type {Object}
 */
const actions = {
}

/**
 * List of all possible mutations, these need to be pure functions.
 *
 * @type {Object}
 */
const mutations = {
  setRandomShuffleSeed (state) {
    state.shuffleSeed = Math.random()
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})