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
      <v-btn class="blue--text darken-1" flat @click.native="updateTask">Add</v-btn>
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
    props: ['task'],
    computed: {
      ...mapGetters([
        'getTypeOfTasks',
        'getTask',
      ]),
      typeOfTask () {
        return this.getTypeOfTasks.map(p => ({
          text: p.name,
          value: p.id
        }));
      }
    },
    mounted () {
      // console.log('getNewTask', this.getNewTask);
      // this.task = this.getTask(this.getEditedTask);
      // console.log('this task', this.task)
    },
    data () {
      return {
        // task: {},
        valid: false,
        types: [],
        title: 'New task',
      };
    },
    watch: {
      task (value) {
        this.types = value.categoryId || [];
        this.title = value.title;
      }
    },
    methods: {
      updateTask () {
        const newTask = {
          ...this.task,
          title: this.title,
          categoryId: this.types,
          price: 50 // temporary
        };
        this.$emit('saveTask', newTask);
        this.closeDialog();
      },
      closeDialog () {
        this.$store.commit(CLOSE_DIALOG);
      }
    }
  };
</script>
