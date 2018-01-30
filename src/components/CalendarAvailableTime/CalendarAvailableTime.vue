<template>
  <div>
    <div class="calendar"></div>
    <v-btn class="blue--text darken-1" flat @mousedown.native="show">Dupka</v-btn>
    <full-calendar
      :selectable="false"
      :editable="false"
      :events="availableDates"
      :header="{
          left: 'prev,next',
          center: 'title',
          right: 'agendaWeek,agendaDay'
        }"
    ></full-calendar>
  </div>
</template>

<script>
  // import jQuery from 'jquery'
  import {mapGetters} from 'vuex';
  // import {ADD_NEW_TASK, OPEN_DIALOG} from '../../store/mutation-types';
  // import {fullcalendar} from 'fullcalendar';
  import {FullCalendar} from 'vue-full-calendar';
  import moment from 'moment';
  import _ from 'underscore';

  export default {
    components: {
      FullCalendar
    },
    computed: {
      ...mapGetters([
        'getTasks'
      ]),
      availableDates () {
        const startAvailableDate = moment().format('x');
        const endAvailableDate = moment().add(20, 'day').format('x');
        let availableTime = [];
        for (let i = 0; i <= 20; i++) {
          availableTime.push({
            start: moment().add(i, 'day').format('YYYY-MM-DDT08:00:00'),
            end: moment().add(i, 'day').format('YYYY-MM-DDT18:00:00'),
            rendering: 'background'
          });
        }

        _.each(this.getTasks, function (item) {
          const eventDate = moment(item.start).format('x');
          if (eventDate > startAvailableDate && eventDate < endAvailableDate) {
            availableTime.push({
              start: item.start,
              end: item.end,
              color: '#ff9f89'
            });
          }
        });
        return availableTime;
      }
    },
    mounted () {
    },
    methods: {
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
