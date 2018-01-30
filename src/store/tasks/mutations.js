import * as types from '../mutation-types';
import Vue from 'vue';

export default {
  [types.ADD_NEW_TASK] (state, payload) {
    console.log('ADD_NEW_TASK');
    payload.id = state.nextId++;
    // state.tasks.push(payload);
    // Vue.set(state.tasks, payload.id, payload);
    state.tasks.push(payload);
  },

  [types.UPDATE_TASK] (state, payload) {
    const task = state.tasks.find(task => task.id === payload.id);
    const index = state.tasks.indexOf(task);
    Vue.set(state.tasks, index, payload);
  }
};
