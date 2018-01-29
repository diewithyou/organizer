<template>
  <Modal title="Add Type Of Task">
    <v-form v-model="valid" slot="body">
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
      <v-btn class="blue--text darken-1" flat :disabled="!valid" @click.native="addTypeOfTask">Add</v-btn>
    </v-card-actions>
  </Modal>
</template>

<script>
  import {CLOSE_DIALOG, ADD_TYPE_OF_TASK} from '../../store/mutation-types';
  import Modal from '../Modal/Modal';

  export default {
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
