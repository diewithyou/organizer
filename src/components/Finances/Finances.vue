<template>
  <v-flex xs12 sm6 offset-sm3>
    <div v-for="year in statistic">
      {{year.year}}
      <v-expansion-panel expand>
        <v-expansion-panel-content v-for="(month, i) in year.months" :key="i">
          <div slot="header">{{month.monthTranslated}} - <strong>{{month.tasks.length}}</strong></div>
          <v-card>
            <v-card-text class="grey lighten-3">
              <v-data-table
                  v-bind:headers="tasksHeaders"
                  :items="month.tasks"
                  hide-actions
                  class="elevation-1"
                >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.title }}</td>
                  <td class="text-xs-right">{{ props.item.price }}</td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
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
        let data = [{
          year: 2017,
          months: []
        }, {
          year: 2018,
          months: []
        }];

        _.each(data, function (item) {
          for (let i = 1; i <= 12; i++) {
            item.months.push({
              month: i,
              monthTranslated: moment().month(i - 1).format('MMMM'),
              tasks: []
            });
          }
        });

        _.each(this.getTasks, function (item) {
          let year = parseInt(moment(item.start).format('YYYY'));
          let month = parseInt(moment(item.start).format('M'));
          let yearObj = _.findWhere(data, {year: year});
          let monthObj = _.findWhere(yearObj.months, {month: month});
          // console.log('year', year, 'month', month, item, yearObj, monthObj);
          monthObj.tasks.push(item);
          // TODO: accumulated tasks []
        });

        return data;
      }
    },
    mounted () {
      console.log('statistic', this.statistic);
    },
    data () {
      return {
        tasksHeaders: [
          {
            text: 'Title',
            align: 'left',
            sortable: false
          },
          {
            text: 'Income',
            sortable: false
          }
        ]
      };
    }
  };
</script>
