import mutations from './mutations'

export default {
  state: {
    tasks: [
      {
        title: 'All Day Event',
        start: '2017-10-30T19:00:00'
      },
      {
        title: 'Long Event',
        start: '2017-10-30T08:35:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-10-30T16:00:00'
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
