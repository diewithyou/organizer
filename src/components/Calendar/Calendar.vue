<template>
  <div>
    <div class="calendar"></div>
    <AddTaskModal v-on:abcdef="abcdefg"></AddTaskModal>
    <v-btn class="blue--text darken-1" flat @mousedown.native="show">Dupka</v-btn>
  </div>
</template>

<script>
  import jQuery from 'jquery'
  import {OPEN_DIALOG} from '../../store/mutation-types'
  import {fullcalendar} from 'fullcalendar'
  import AddTaskModal from './AddTaskModal'

  export default {
    components: {
      fullcalendar,
      AddTaskModal
    },
    mounted () {
      console.log('bind', this)
      const cal = jQuery('.calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        events: [
          {
            title: 'All Day Event',
            start: '2017-09-30T19:00:00'
          },
          {
            title: 'Long Event',
            start: '2017-09-30T08:35:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-09-30T16:00:00'
          }
        ],
        editable: true,
        eventClick: (calEvent, jsEvent, view) => {
          console.log('Event: ' + calEvent.title)
          console.log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY)
          console.log('View: ' + view.name)
        },
        dayClick: function (date, jsEvent, view) {
          console.log('jsEvent', jsEvent)
          console.log('Clicked on:', date.format(), date)
          console.log('Coordinates:', jsEvent.pageX, jsEvent.pageY)
          console.log('Current view:', view)
          console.log('this', this)

          cal.fullCalendar('renderEvent', {title: 'title', start: date}, true)

          console.log('ppp', cal.fullCalendar('clientEvents'))

          setTimeout(function () {
            this.$store.commit(OPEN_DIALOG)
          }.bind(this), 1)
        }.bind(this)
      })
    },
    methods: {
      show () {
        this.$store.commit(OPEN_DIALOG)
      },
      abcdefg (abc) {
        console.log('abcdefg', abc)
      }
    }
  }
</script>


<style>
  .calendar {
    max-width: 900px;
    margin: 0 auto;
  }
</style>

<style src="fullcalendar/dist/fullcalendar.css">
</style>
