<template>
  <Modal title="Add Task">
    <v-form v-model="valid" slot="body">
      <div>dupeczka</div>
      <v-select
        label="Select"
        v-bind:items="typeOfTasks"
        v-model="e7"
        multiple
        chips
        hint="What are the target regions"
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
  import {mapGetters} from 'vuex'
  import {CLOSE_DIALOG} from '../../store/mutation-types'
  import Modal from '../Modal/Modal'

  export default {
    components: {
      Modal
    },
    computed: {
      ...mapGetters([
        'getTypeOfTasks',
        'getNewTask'
      ]),
      typeOfTasks () {
        return Object.entries(this.getTypeOfTasks).map(p => p[0])
      }
    },
    mounted () {
      console.log('getNewTask', this.getNewTask)
    },
    data () {
      return {
        valid: false,
        e7: [],
        states: {abc: [
          'abcd',
          'bcde',
          'cdef'
        ]}
      }
    },
    methods: {
      addTask () {
        console.log('dodaje')
        const newTask = {
          'abc': 'abc'
        }
        this.$emit('abcdef', newTask)
      },
      closeDialog () {
        this.$store.commit(CLOSE_DIALOG)
      }
    }
  }
</script>
