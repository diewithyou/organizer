<template>
  <Modal title="Add Task">
    <v-form v-model="valid" slot="body">
      <v-text-field v-model="title" @input="customizedTitle = true"></v-text-field>
      <v-select
        label="Select"
        v-bind:items="typeOfTask"
        v-model="types"
        multiple
        chips
        hint="Zaznacz opcje"
        persistent-hint
      ></v-select>
      <v-text-field v-model="time" @input="customizedTime = true" label="Minuty" />
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
        'getTypeById',
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
        time: 0,
        customizedTitle: false,
        customizedTime: false
      };
    },
    watch: {
      task (value) {
        this.types = value.categoryId || [];
        this.title = value.title;
        this.customizedTitle = value.customizedTitle;
      },
      types (value) {
        if (!this.customizedTitle) {
          this.title = this.getDefaultTaskName(value);
        }
        if (!this.customizedTime) {
           this.time = this.getDefaultTaskDuration(value);
         }
      },
    
    },
    methods: {
      updateTask () {
        const newTask = {
          ...this.task,
          title: this.title,
          categoryId: this.types,
          time: this.time,
          customizedTitle: this.customizedTitle,
          customizedTime: this.customizedTime,
          // ...this.data,
          price: 50 // temporary
        };
        this.$emit('saveTask', newTask);
        this.closeDialog();
      },
      closeDialog () {
        this.$store.commit(CLOSE_DIALOG);
      },
      getDefaultTaskName () {
        return this.types
          .map(this.getTypeById)
          .map(type => type.name)
          .join(' + ')
        ;
      },
      getDefaultTaskDuration () {
        return this.types
          .map(this.getTypeById)
          .map(type => type.time)
          .reduce((a, b) => a + b, 0);
      },
      setCustomizedTitle () {
        this.customizedTitle = true;
      }
    }
  };
</script>
