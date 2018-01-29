import * as types from '../mutation-types';

export default {
  [types.CREATE_NEW_TASK] (state, payload) {
    console.log('CREATE_NEW_TASK');
    state.newTask = payload;
  },

  [types.ADD_NEW_TASK] (state, payload) {
    console.log('ADD_NEW_TASK');
    state.tasks.push(payload);
  }
};
