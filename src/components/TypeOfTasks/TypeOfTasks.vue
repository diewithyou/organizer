<template>
  <v-flex xs12 sm6 offset-sm3>
    <AddTypeOfTaskModal :typeOfTask="editedTypeOfTask"></AddTypeOfTaskModal>
    <!-- <DeleteModal></DeleteModal> -->
    <v-btn class="blue--text darken-1" flat @mousedown.native="show">Add type of task</v-btn>
    <v-data-table
      v-bind:headers="headers"
      :items="getTypeOfTasks"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.time }}</td>
        <td class="text-xs-right">{{ props.item.price.toFixed(2) }}</td>
        <td class="text-xs-right td-buttons-width">
          <v-btn outline class="blue--text darken-1 ma-0" flat @click.native="openEditTypeOfTaskModal(props.item)">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn outline class="red--text darken-4 ma-0" flat @click.native="openDeleteModal">
            <v-icon>delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {OPEN_DIALOG} from '../../store/mutation-types';
  import AddTypeOfTaskModal from './AddTypeOfTaskModal';
  // import DeleteModal from './DeleteModal'

  export default {
    components: {
      AddTypeOfTaskModal
      // DeleteModal
    },
    computed: {
      ...mapGetters([
        'getTypeOfTasks'
      ])
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
        ],
        editedTypeOfTask: null
      };
    },
    methods: {
      show () {
        this.editedTypeOfTask = null;
        setTimeout(function () {
          this.$store.commit(OPEN_DIALOG);
        }.bind(this));
      },
      openEditTypeOfTaskModal (item) {
        console.log('edit', item);
        this.editedTypeOfTask = item;
        setTimeout(function () {
          this.$store.commit(OPEN_DIALOG);
        }.bind(this));
      },
      openDeleteModal () {
        console.log('xxx');
        setTimeout(function () {
          this.$store.commit(OPEN_DIALOG);
        }.bind(this));
      }
    }
  };
</script>

<style>
  .td-buttons-width {
    width: 235px;
  }
</style>
