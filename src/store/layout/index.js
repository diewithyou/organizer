import mutations from './mutations';

export default {
  state: {
    drawer: false,
    dialog: false,
    editedTask: null
  },
  mutations,
  getters: {
    getDrawer: state => state.drawer,
    getDialog: state => state.dialog,
    getEditedTask: state => state.editedTask
  }
};
