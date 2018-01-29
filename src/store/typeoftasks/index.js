import mutations from './mutations';

export default {
  state: [
    {
      name: 'Makijaż',
      time: 60,
      price: 75.99,
      id: 1
    },
    {
      name: 'Rzęsy',
      time: 120,
      price: 70,
      id: 2
    }
  ],
  mutations,
  getters: {
    getTypeOfTasks: state => state
  }
};
