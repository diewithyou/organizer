<template>
  <div>
    <div class="calendar"></div>
    <AddTaskModal v-on:addNewTask="addNewTask"></AddTaskModal>
    <v-btn class="blue--text darken-1" flat @mousedown.native="show">Dupka</v-btn>
    <full-calendar
      :editable="true"
      day-click="dayClick"
      @event-created="eventCreated"
      :events="getTasks"
    > </full-calendar>
  </div>
</template>

<script>
  // import jQuery from 'jquery'
  import {mapGetters} from 'vuex';
  // import {ADD_NEW_TASK, OPEN_DIALOG} from '../../store/mutation-types';
  // import {fullcalendar} from 'fullcalendar';
  import {FullCalendar} from 'vue-full-calendar';
  import AddTaskModal from './AddTaskModal';
  import {OPEN_DIALOG, ADD_NEW_TASK} from '../../store/mutation-types';

  export default {
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
        this.cal.fullCalendar('renderEvent', newTask);
      },
      eventCreated (event) {
        // this.$store.commit(OPEN_DIALOG);
        // setTimeout(() => {
        //   this.$store.commit(OPEN_DIALOG);
        // }, 1);
        this.$store.commit(ADD_NEW_TASK, {
          start: event.start.format(),
          end: event.end.format()
        });
      },
      dayClick (date, jsEvent, view) {
          // to do zmiany w pozniejszym terminie
        setTimeout(() => {
          this.$store.commit(OPEN_DIALOG);
        }, 1);
        // }.bind(this)
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
