import * as types from '../mutation-types';

export default {
  [types.ADD_TYPE_OF_TASK] (state, payload) {
    console.log('ADD_TYPE_OF_TASK');
    const id = state.slice(-1)[0].id + 1;
    payload.id = id;
    state.push(payload);
  }
};
