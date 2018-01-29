<template>
  <div>
    <div class="calendar"></div>
    <AddTaskModal @addNewTask="addNewTask" :taskId="taskId"></AddTaskModal>
    <v-btn class="blue--text darken-1" flat @mousedown.native="show">Dupka</v-btn>
    <full-calendar
      :editable="true"
      @event-created="onEventCreated"
      @event-drop="onEventDrop"
      :events="getTasks"
    ></full-calendar>
  </div>
</template>

<script>
  // import jQuery from 'jquery'
  import {mapGetters} from 'vuex';
  // import {ADD_NEW_TASK, OPEN_DIALOG} from '../../store/mutation-types';
  // import {fullcalendar} from 'fullcalendar';
  import {FullCalendar} from 'vue-full-calendar';
  import AddTaskModal from './AddTaskModal';
  import {OPEN_DIALOG, ADD_NEW_TASK, UPDATE_TASK, CREATE_NEW_TASK} from '../../store/mutation-types';

  export default {
    data () {
      return {
        taskId: null
      }
    },
    components: {
      FullCalendar,
      AddTaskModal
    },
    computed: {
      ...mapGetters([
        'getTasks'
      ])
    },
    mounted () {
    },
    methods: {
      show () {
        this.$store.commit(OPEN_DIALOG);
      },
      addNewTask (newTask) {
        this.$store.commit(ADD_NEW_TASK, newTask);
        // this.cal.fullCalendar('renderEvent', newTask);
      },
      onEventCreated (event) {
        // this.$store.commit(OPEN_DIALOG);
        //   start: event.start.format(),
        //   end: event.end.format()
        // });
        this.$store.commit(CREATE_NEW_TASK, {start: event.start.format()});
        // this.$store.commit(OPEN_DIALOG);
        setTimeout(() => {
          this.$store.commit(OPEN_DIALOG);
        }, 1);
      },

      onEventDrop (event) {
        // console.log('oneventdrop', event);
        this.$store.commit(UPDATE_TASK, {
          start: event.start.format(),
          end: event.end.format(),
          id: event.id,
          title: event.title
        });
      }
    }
  };
</script>


<style>
  .calendar {
    max-width: 900px;
    margin: 0 auto;
  }
</style>

<style src="fullcalendar/dist/fullcalendar.css">
</style>
