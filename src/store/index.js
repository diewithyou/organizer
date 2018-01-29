import Vue from 'vue';
import Vuex from 'vuex';
import layout from './layout';
import typeoftasks from './typeoftasks';
import tasks from './tasks';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    layout,
    typeoftasks,
    tasks
  }
});

export default store;
