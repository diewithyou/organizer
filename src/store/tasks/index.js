import mutations from './mutations';

export default {
  state: {
    tasks: [
      {
        id: 1,
        title: 'Makijasz',
        start: '2017-01-25T19:00:00',
        price: 80
      },
      {
        id: 1,
        title: 'Makijasz',
        start: '2017-01-25T17:00:00',
        price: 50
      },
      {
        id: 2,
        title: 'ojtam inne',
        start: '2017-01-25',
        price: 40
      },
      {
        id: 3,
        title: 'maj 2018',
        start: '2018-05-13',
        price: 55
      },
      {
        id: 1,
        title: 'Makijasz',
        start: '2017-10-30T19:00:00',
        price: 76
      },
      {
        id: 999,
        title: 'Long Event',
        start: '2017-10-30T08:35:00',
        price: 40
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-10-30T16:00:00',
        price: 30.3
      }
    ],
    newTask: {}
  },
  mutations,
  getters: {
    getNewTask: state => state.newTask,
    getTasks: state => state.tasks
  }
};
