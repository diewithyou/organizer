import * as types from '../mutation-types';
import Vue from 'vue';

export default {
  [types.CREATE_NEW_TASK] (state, payload) {
    console.log('CREATE_NEW_TASK');
    state.newTask = payload;
  },

  [types.ADD_NEW_TASK] (state, payload) {
    console.log('ADD_NEW_TASK');
    payload.id = state.nextId++;
    // state.tasks.push(payload);
    Vue.set(state.tasks, payload.id, payload);
  },

  [types.UPDATE_TASK] (state, payload) {
    Vue.set(state.tasks, payload.id, payload);
  }
};
