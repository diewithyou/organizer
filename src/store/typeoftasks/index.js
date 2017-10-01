import mutations from './mutations'

export default {
  state: {
    'Makijaż': {
      name: 'Makijaż',
      time: 60,
      price: 75.99
    },
    'Rzęsy': {
      name: 'Rzęsy',
      time: 120,
      price: 70
    }
  },
  mutations,
  getters: {
    getTypeOfTasks: state => state
  }
}
