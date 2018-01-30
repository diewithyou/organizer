<template>
  <v-flex xs12 sm6 offset-sm3>
    <FinancialItemDetailsModal :currentItems="detailedItems"></FinancialItemDetailsModal>
    <div v-for="year in statistic">
      <h5>{{year.year}}</h5>

      <v-expansion-panel expand>
        <v-expansion-panel-content v-for="(month, i) in year.months" :key="i">
          <div slot="header">{{month.monthTranslated}} -
            <strong>{{month.tasks.length}}</strong>
          </div>
          <v-card v-if="month.tasks.length">
            <v-card-text class="grey lighten-3">
              <v-data-table v-bind:headers="tasksHeaders" :items="month.accumulatedTasks" hide-actions class="elevation-1">
                <template slot="items" slot-scope="props">
                  <tr v-if="props.item.count" v-on:click="showItemDetails(year.year, month.month, props.item.categoryId)">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.count }}</td>
                    <td class="text-xs-right">{{ props.item.income }}</td>
                  </tr>
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
import { mapGetters } from 'vuex';
import moment from 'moment';
import _ from 'underscore';
import FinancialItemDetailsModal from './FinancialItemDetailsModal';
import {OPEN_DIALOG} from '../../store/mutation-types';

export default {
  components: {
    FinancialItemDetailsModal
  },
  methods:{
    prepareEmptyCategories: function() {
      var emptyCategories = _.map(this.getTypeOfTasks, function(task) {
        return {
            categoryId: task.id,
            name: task.name,
            income: 0,
            count: 0
          };
        });

      emptyCategories.push({
        categoryId: 'other',
        name: 'Pozostałe',
        income: 0,
        count: 0
      });

      return emptyCategories;
    },
    getItemsDetails: function(year, month, categoryId) {
      var items = _.chain(this.statistic)
        .filter(function(yearGroup){
          return yearGroup.year === year;
        })
        .first()
        .pick('months')
        .compact()
        .first()
        .filter(function(monthGroup){
          return monthGroup.month === month;
        })
        .first()
        .pick('tasks')
        .compact()
        .first()
        .filter(function(task) {
          if(categoryId === 'other') {
            return task.categoryId.length > 1;
          } else {
            return task.categoryId.length === 1 && task.categoryId[0] === categoryId;
          }
        })
        .map(function(item){
          item.formattedDate = moment(item.start).format('DD-MM-YYYY H:mm');
          return item;
        })
        .value();

        return items;
    },
    showItemDetails: function(year, month, categoryId) {
      this.detailedItems = this.getItemsDetails(year, month, categoryId);
      setTimeout(function () {
        this.$store.commit(OPEN_DIALOG);
      }.bind(this));
    }
  },
  computed: {
    ...mapGetters([
      'getTasks',
      'getTypeOfTasks'
    ]),
    statistic() {
      let data = [{
        year: 2017,
        months: []
      }, {
        year: 2018,
        months: []
      }];

      _.each(data, item => {
        for (let i = 1; i <= 12; i++) {
          item.months.push({
            month: i,
            monthTranslated: moment().month(i - 1).format('MMMM'),
            tasks: [],
            accumulatedTasks: this.prepareEmptyCategories()
          });
        }
      });

      _.each(this.getTasks, function(item) {
        let year = parseInt(moment(item.start).format('YYYY'));
        let month = parseInt(moment(item.start).format('M'));
        let yearObj = _.findWhere(data, { year: year });
        let monthObj = _.findWhere(yearObj.months, { month: month });

        monthObj.tasks.push(item);
      });

      _.each(data, function(year) {
        _.each(year.months, function(month) {
          let accumulatedTasks = month.accumulatedTasks;
          _.each(month.tasks, function(task) {
            let taskCategories = task.categoryId;
            if(taskCategories.length === 1) {
              _.findWhere(accumulatedTasks, {categoryId: taskCategories[0]}).income += task.price;
              _.findWhere(accumulatedTasks, {categoryId: taskCategories[0]}).count++;
            } else {
              _.findWhere(accumulatedTasks, {categoryId: 'other'}).income += task.price;
              _.findWhere(accumulatedTasks, {categoryId: 'other'}).count++;
            }
          });
        });
      });

      return data;
    }
  },
  mounted() {
    console.log('statistic', this.statistic);
  },
  data() {
    return {
      detailedItems: [],
      tasksHeaders: [
        {
          text: 'Title',
          align: 'left',
          sortable: false
        },
        {
          text: 'Count',
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
