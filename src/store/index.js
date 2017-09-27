import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout'
import typeoftasks from './typeoftasks'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    layout,
    typeoftasks
  }
})

export default store
