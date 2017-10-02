import mutations from './mutations'

export default {
  state: {
    tasks: [],
    newTask: {}
  },
  mutations,
  getters: {
    getNewTask: state => state.newTask
  }
}
