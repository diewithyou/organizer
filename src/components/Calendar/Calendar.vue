<template>
  <div class="calendar">
  </div>
</template>

<script>
  import jQuery from 'jquery'
  import {fullcalendar} from 'fullcalendar'

  export default {
    fullcalendar,
    mounted () {
      jQuery('.calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        }
      })
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