<template>
  <div>
    <div class="calendar"></div>
    <EditTaskModal @saveTask="saveTask" :task="editedTask"></EditTaskModal>
    <v-btn class="blue--text darken-1" flat @mousedown.native="show">Dupka</v-btn>
    <full-calendar
      :config="config"
      @event-created="onEventCreated"
      @event-drop="onEventDrop"
      @event-selected="onEventSelected"
      :events="getTasks"
    ></full-calendar>
  </div>
</template>

<script>
  // import jQuery from 'jquery'
  import moment from 'moment';
  import {mapGetters} from 'vuex';
  // import {ADD_NEW_TASK, OPEN_DIALOG} from '../../store/mutation-types';
  // import {fullcalendar} from 'fullcalendar';
  import {FullCalendar} from 'vue-full-calendar';
  import EditTaskModal from './EditTaskModal';
  import {OPEN_DIALOG, ADD_NEW_TASK, UPDATE_TASK} from '../../store/mutation-types';
  import {CREATE_TASK, OPEN_DIALOG_EDIT_TASK} from '../../store/action-types';

  export default {
    components: {
      FullCalendar,
      EditTaskModal
    },
    computed: {
      ...mapGetters([
        'getTasks',
        'getDuration'
      ])
    },
    data() {
      return {
        editedTask: null,
        config: {
          timezone: 'local',
          eventDurationEditable: false
        }
      }
    },
    mounted () {
    },
    methods: {
      show () {
        this.$store.commit(OPEN_DIALOG);
      },
      saveTask (task) {
        task.end = moment(task.start).add(task.time, 'minutes').format();
        if (task.id) {
          this.$store.commit(UPDATE_TASK, task);
        } else {
          this.$store.commit(ADD_NEW_TASK, task);
        }
      },

      onEventCreated (event) {
        this.editedTask = {start: event.start.format()};
        this.$store.dispatch(OPEN_DIALOG_EDIT_TASK)
      },

      onEventDrop (event) {
        // console.log('oneventdrop', event);
        this.$store.commit(UPDATE_TASK, this.getTaskFromEvent(event));
      },

      onEventSelected (event) {
        this.editedTask = this.getTaskFromEvent(event);
        this.$store.dispatch(OPEN_DIALOG_EDIT_TASK);
      },

      getTaskFromEvent(event) {
        return {
          start: event.start.format(),
          end: event.start.clone().add(event.time, 'minutes').format(), 
          id: event.id,
          title: event.title,
          categoryId: event.categoryId,
          customizedTitle: event.customizedTitle,
          time: event.time,
          customizedTime: event.customizedTime
        }
      },
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
