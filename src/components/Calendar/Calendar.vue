<template>
  <div>
    <div class="calendar"></div>
    <EditTaskModal @saveTask="saveTask" :task="editedTask"></EditTaskModal>
    <v-btn class="blue--text darken-1" flat @mousedown.native="show">Dupka</v-btn>
    <full-calendar
      :editable="true"
      @event-created="onEventCreated"
      @event-drop="onEventDrop"
      @event-selected="onEventSelected"
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
        'getTasks'
      ])
    },
    data() {
      return {
        editedTask: null 
      }
    },
    mounted () {
    },
    methods: {
      show () {
        this.$store.commit(OPEN_DIALOG);
      },
      saveTask (task) {
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
          end: event.end && event.end.format(),
          id: event.id,
          title: event.title,
          categoryId: event.categoryId
        }
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
