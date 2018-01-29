import * as types from '../mutation-types';

export default {
  [types.ADD_TYPE_OF_TASK] (state, payload) {
    console.log('ADD_TYPE_OF_TASK');
    state.push(payload);
  }
};
