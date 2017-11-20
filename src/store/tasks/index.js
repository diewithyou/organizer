import mutations from './mutations'

export default {
  state: {
    tasks: [
      {
        title: 'All Day Event',
        start: '2017-10-30T19:00:00',
        price: 76
      },
      {
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
}
