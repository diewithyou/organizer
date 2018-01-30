<template>
  <Modal title="Add Type Of Task">
    <v-form v-model="valid" ref="form" slot="body">
      <v-text-field
        label="Name"
        :rules="nameRules"
        v-model="name">
      </v-text-field>
      <v-text-field
        label="Time"
        :rules="timeRules"
        v-model="time">
      </v-text-field>
      <v-text-field
        label="Price"
        :rules="priceRules"
        v-model="price">
      </v-text-field>
    </v-form>
    <v-card-actions slot="v-card-actions">
      <v-spacer></v-spacer>
      <v-btn class="blue--text darken-1" flat @click.native="hideDialog">Close</v-btn>
      <v-btn class="blue--text darken-1" flat :disabled="!valid" @click.native="addTypeOfTask" v-show="!typeOfTask">Add</v-btn>
      <v-btn class="blue--text darken-1" flat :disabled="!valid" @click.native="editTypeOfTask" v-show="typeOfTask">Edit</v-btn>
    </v-card-actions>
  </Modal>
</template>

<script>
  import {CLOSE_DIALOG, ADD_TYPE_OF_TASK, EDIT_TYPE_OF_TASK} from '../../store/mutation-types';
  import Modal from '../Modal/Modal';

  export default {
    props: ['typeOfTask'],
    components: {
      Modal
    },
    data () {
      return {
        valid: false,
        name: '',
        nameRules: [
          (v) => !!v && v.length <= 50 || 'Enter the correct name'
        ],
        time: '',
        timeRules: [
          (v) => !isNaN(v) && v > 0 && v < 480 || 'This is not a number'
        ],
        price: '',
        priceRules: [
          (v) => !isNaN(v) && v > 0 && v < 1000 || 'Enter the correct price'
        ]
      };
    },
    watch: {
      typeOfTask (value) {
        this.name = value ? value.name : '';
        this.price = value ? value.price : '';
        this.time = value ? value.time : '';
        if (!value) {
          this.$refs.form.reset();
        }
      }
    },
    methods: {
      addTypeOfTask () {
        this.$store.commit(ADD_TYPE_OF_TASK, {
          name: this.name,
          time: parseInt(this.time),
          price: parseFloat(this.price)
        });
        this.clearForm();
        this.hideDialog();
      },
      editTypeOfTask () {
        this.$store.commit(EDIT_TYPE_OF_TASK, {
          id: this.typeOfTask.id,
          name: this.name,
          time: parseInt(this.time),
          price: parseFloat(this.price)
        });
        this.clearForm();
        this.hideDialog();
      },
      hideDialog () {
        this.$store.commit(CLOSE_DIALOG);
      },
      clearForm () {
        this.name = '';
        this.time = '';
        this.price = '';
      }
    }
  };
</script>
