import * as types from '../mutation-types';

export default {
  [types.OPEN_DRAWER] (state) {
    console.log('OPEN_DRAWER');
    state.drawer = true;
  },

  [types.CLOSE_DRAWER] (state) {
    console.log('CLOSE_DRAWER');
    state.drawer = false;
  },

  [types.OPEN_DIALOG] (state) {
    console.log('OPEN_DIALOG');
    state.dialog = true;
  },

  [types.CLOSE_DIALOG] (state) {
    console.log('CLOSE_DIALOG');
    state.dialog = false;
  }
};
