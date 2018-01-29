import mutations from './mutations';

export default {
  state: {
    drawer: false,
    dialog: false
  },
  mutations,
  getters: {
    getDrawer: state => state.drawer,
    getDialog: state => state.dialog
  }
};
