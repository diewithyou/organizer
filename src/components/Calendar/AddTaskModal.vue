<template>
  <Modal title="Add Task">
    <v-form v-model="valid" slot="body">
      <v-text-field v-model="title"></v-text-field>
      <v-select
        label="Select"
        v-bind:items="typeOfTask"
        v-model="types"
        multiple
        chips
        hint="Zaznacz opcje"
        persistent-hint
      ></v-select>
    </v-form>
    <v-card-actions slot="v-card-actions">
      <v-spacer></v-spacer>
      <v-btn class="blue--text darken-1" flat @click.native="closeDialog">Close</v-btn>
      <v-btn class="blue--text darken-1" flat @click.native="addTask">Add</v-btn>
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
    computed: {
      ...mapGetters([
        'getTypeOfTasks',
        'getNewTask'
      ]),
      typeOfTask () {
        return this.getTypeOfTasks.map(p => ({
          text: p.name,
          value: p.id
        }));
      }
    },
    mounted () {
      console.log('getNewTask', this.getNewTask);
    },
    data () {
      return {
        valid: false,
        types: [],
        title: 'New task',
      };
    },
    methods: {
      addTask () {
        const newTask = {
          title: this.title,
          start: this.getNewTask.start,
          categoryId: this.types
        };
        this.$emit('addNewTask', newTask);
        this.closeDialog();
      },
      closeDialog () {
        this.$store.commit(CLOSE_DIALOG);
      }
    }
  };
</script>
