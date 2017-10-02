<template>
  <v-flex xs12 sm6 offset-sm3>
    <AddTypeOfTaskModal></AddTypeOfTaskModal>
    <v-btn class="blue--text darken-1" flat @mousedown.native="show">Add type of task</v-btn>
    <v-data-table
      v-bind:headers="headers"
      :items="typeOfTasks"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" scope="props">
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.time }}</td>
        <td class="text-xs-right">{{ props.item.price.toFixed(2) }}</td>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {OPEN_DIALOG} from '../../store/mutation-types'
  import AddTypeOfTaskModal from './AddTypeOfTaskModal'

  export default {
    components: {
      AddTypeOfTaskModal
    },
    computed: {
      ...mapGetters([
        'getTypeOfTasks'
      ]),
      typeOfTasks () {
        return Object.entries(this.getTypeOfTasks).map(p => p[1])
      }
    },
    mounted () {
      console.log('getTypeOfTasks', this.getTypeOfTasks)
    },
    data () {
      return {
        headers: [
          {
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Time',
            value: 'time'
          },
          {
            text: 'Price',
            value: 'price'
          }
        ]
      }
    },
    methods: {
      show () {
        this.$store.commit(OPEN_DIALOG)
      }
    }
  }
</script>
