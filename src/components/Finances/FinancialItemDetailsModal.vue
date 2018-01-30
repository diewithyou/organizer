<template>
  <Modal title="Details" width="600px">
    <v-data-table v-bind:headers="detailsHeaders" :items="currentItems" hide-actions class="elevation-1" slot="body">
      <template slot="items" slot-scope="props">
        <tr>
          <td>{{ props.item.title }}</td>
          <td class="text-xs-right">{{ props.item.formattedDate }}</td>
          <td class="text-xs-right">{{ props.item.price }}</td>
        </tr>
      </template>
    </v-data-table>
    
    <v-card-actions slot="v-card-actions">
      <v-spacer></v-spacer>
      <v-btn class="blue--text darken-1" flat @click.native="hideDialog">Close</v-btn>
    </v-card-actions>
  </Modal>
</template>

<script>
  import {CLOSE_DIALOG} from '../../store/mutation-types';
  import Modal from '../Modal/Modal';

  export default {
    components: {
      Modal
    },
    props: ['currentItems'],
    data () {
      return {
        detailsHeaders: [
        {
          text: 'Title',
          align: 'left',
          sortable: false
        },
        {
          text: 'Date',
          sortable: false
        },
        {
          text: 'Income',
          sortable: false
        }
      ]
      };
    },
    methods: {
      hideDialog () {
        this.$store.commit(CLOSE_DIALOG);
      }
    }
  };
</script>
