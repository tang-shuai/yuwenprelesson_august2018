import Vue from 'vue'
import Vuex from 'vuex'
import Mutations from './Mutations.js'
import State from './State.js'

Vue.use(Vuex);

var store = {
  state:State,
  mutations:Mutations
}

export default new Vuex.Store(store);
