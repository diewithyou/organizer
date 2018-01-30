<template>
  <Modal title="Delete Type Of Task">
    <v-form v-model="valid" slot="body">
      <div>dupa</div>
    </v-form>
    <v-card-actions slot="v-card-actions">
      <v-spacer></v-spacer>
      <v-btn class="blue--text darken-1" flat @click.native="closeDialog">Close</v-btn>
      <v-btn class="blue--text darken-1" flat @click.native="deleteTypeOfTask">Delete</v-btn>
    </v-card-actions>
  </Modal>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {CLOSE_DIALOG} from '../../store/mutation-types';
  import Modal from '../Modal/Modal';

  export default {
    components: {
      Modal
    },
    props: ['idTypeOfTask'],
    computed: {
    },
    mounted () {
      // console.log('getNewTask', this.getNewTask);
      // this.task = this.getTask(this.getEditedTask);
      // console.log('this task', this.task)
    },
    data () {
      return {
        valid: false
      };
    },
    methods: {

    }
  };
</script>
