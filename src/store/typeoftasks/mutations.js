import * as types from '../mutation-types';
import _ from 'underscore';

export default {
  [types.ADD_TYPE_OF_TASK] (state, payload) {
    console.log('ADD_TYPE_OF_TASK');
    const id = state.slice(-1)[0].id + 1;
    payload.id = id;
    state.push(payload);
  },

  [types.EDIT_TYPE_OF_TASK] (state, payload) {
    console.log('EDIT_TYPE_OF_TASK');
    _.each(state, function(item) {
      if (item.id === payload.id) {
        item.name = payload.name;
        item.price = payload.price;
        item.time = payload.time;
      }
    });
  }
};
