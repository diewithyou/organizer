import mutations from './mutations'

export default {
  state: {
    drawer: false
  },
  mutations,
  getters: {
    getDrawer: state => state.drawer
  }
}
