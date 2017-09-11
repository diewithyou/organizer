import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dupa: 'abc'
  },
  modules: {
    layout
  },
  getters: {
    getDupa: state => state.dupa
  }
})

export default store
