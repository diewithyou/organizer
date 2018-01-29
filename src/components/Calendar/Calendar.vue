<template>
  <div>
    <div class="calendar"></div>
    <AddTaskModal v-on:addNewTask="addNewTask"></AddTaskModal>
    <v-btn class="blue--text darken-1" flat @mousedown.native="show">Dupka</v-btn>
  </div>
</template>

<script>
  import jQuery from 'jquery';
  import {mapGetters} from 'vuex';
  import {ADD_NEW_TASK, OPEN_DIALOG, CREATE_NEW_TASK} from '../../store/mutation-types';
  import {fullcalendar} from 'fullcalendar';
  import AddTaskModal from './AddTaskModal';

  export default {
    components: {
      fullcalendar,
      AddTaskModal
    },
    computed: {
      ...mapGetters([
        'getTasks'
      ])
    },
    mounted () {
      console.log('bind', this);
      this.cal = jQuery('.calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        events: this.getTasks,
        editable: true,
        eventClick: (calEvent, jsEvent, view) => {
          console.log('Event: ' + calEvent.title);
          console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
          console.log('View: ' + view.name);
        },
        dayClick: function (date, jsEvent, view) {
          console.log('jsEvent', jsEvent);
          console.log('Clicked on:', date.format(), date, date.toISOString(), date.format('HH:mm:ss'));
          console.log('Coordinates:', jsEvent.pageX, jsEvent.pageY);
          console.log('Current view:', view);
          console.log('this', this);

//          cal.fullCalendar('renderEvent', {title: 'title', start: date}, true)

          console.log('ppp', this.cal.fullCalendar('clientEvents'));

          this.$store.commit(CREATE_NEW_TASK, {
            start: date.format()
          });

          // to do zmiany w pozniejszym terminie
          setTimeout(function () {
            this.$store.commit(OPEN_DIALOG);
          }.bind(this), 1);
        }.bind(this)
      });
    },
    methods: {
      show () {
        this.$store.commit(OPEN_DIALOG);
      },
      addNewTask (newTask) {
        this.$store.commit(ADD_NEW_TASK, newTask);
        this.cal.fullCalendar('renderEvent', newTask);
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
