import mutations from './mutations';
import actions from './actions';

export default {
  state: {
    tasks: [
      {
        id: 1,
        categoryId: [1],
        title: 'Makijasz',
        start: '2017-01-25T19:00:00',
        price: 80
      },
      {
        id: 8,
        categoryId: [1],
        title: 'Makijas taki drugi ',
        start: '2017-01-25T20:00:00',
        price: 60
      },
      {
        id: 2,
        categoryId: [1, 2],
        title: 'Makijasz 2 elo',
        start: '2017-01-25T17:00:00',
        price: 50
      },
      {
        id: 3,
        categoryId: [2],
        title: 'ojtam inne',
        start: '2017-01-25',
        price: 40
      },
      {
        id: 4,
        categoryId: [1],
        title: 'maj 2018',
        start: '2018-05-13',
        price: 55
      },
      {
        id: 5,
        categoryId: [1, 2],
        title: 'Makijasz',
        start: '2017-10-30T19:00:00',
        price: 76
      }
    ],
    nextId: 6,
    newTask: {}
  },
  mutations,
  actions,
  getters: {
    getNewTask: state => state.newTask,
    getTasks: state => state.tasks,
    getTask: state => id => state.tasks.find(task => task.id === id)
  }
};
