import mutations from './mutations'

export default {
  state: {
    drawer: null
  },
  mutations,
  getters: {
    getDrawer: state => state.drawer
  }
}
