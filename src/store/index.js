import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/**
 * Initial, empty state for the module.
 *
 * @type {Object}
 */
const state = () => ({

});

/**
 * Getters for the object, these are like computed properties.
 *
 * @type {Object}
 */
const getters = {
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
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})