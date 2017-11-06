<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-data-table
      v-bind:headers="headers"
      :items="data"
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
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Month',
            value: 'month'
          },
          {
            text: 'Tasks',
            value: 'tasks'
          },
          {
            text: 'Income',
            value: 'income'
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
      }
    }
  }
</script>
