<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-data-table
      v-bind:headers="headers"
      :items="statistic"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" scope="props">
        <td class="text-xs-right">{{ props.item.month }}</td>
        <td class="text-xs-right">{{ props.item.tasks }}</td>
        <td class="text-xs-right">{{ props.item.income.toFixed(2) }}</td>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
  import {mapGetters} from 'vuex';
  import moment from 'moment';
  import _ from 'underscore';

  export default {
    computed: {
      ...mapGetters([
        'getTasks'
      ]),
      statistic () {
        let data = [];

        for (let i = 0; i < 12; i++) {
          data.push({
            month: moment().month(i).format('MMMM'),
            income: 0,
            tasks: 0
          });
        }

        _.each(this.getTasks, function (item) {
          let month = parseInt(moment(item.start).format('M'));
          data[month].income += item.price;
          data[month].tasks++;
        });

        return data;
      }
    },
    mounted () {
      console.log('statistic', this.statistic);
    },
    data () {
      return {
        headers: [
          {
            text: 'Month',
            value: 'month',
            sortable: false
          },
          {
            text: 'Tasks',
            value: 'tasks',
            sortable: false
          },
          {
            text: 'Income',
            value: 'income',
            sortable: false
          }
        ],
        data: [
          {
            month: 'January',
            tasks: 4,
            income: 432.32
          },
          {
            month: 'February',
            tasks: 6,
            income: 832.3
          }
        ]
      };
    }
  };
</script>
