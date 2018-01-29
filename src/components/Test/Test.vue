<template>
  <div>
  <Modal title="Select Country">
    <v-radio-group slot="body">
      <v-radio label="Bahamas, The" value="bahamas"></v-radio>
      <v-radio label="Bahrain" value="bahrain"></v-radio>
      <v-radio label="Bangladesh" value="bangladesh"></v-radio>
      <v-radio label="Barbados" value="barbados"></v-radio>
      <v-radio label="Belarus" value="belarus"></v-radio>
      <v-radio label="Belgium" value="belgium"></v-radio>
      <v-radio label="Belize" value="belize"></v-radio>
      <v-radio label="Benin" value="benin"></v-radio>
      <v-radio label="Bhutan" value="bhutan"></v-radio>
      <v-radio label="Bolivia" value="bolivia"></v-radio>
      <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
      <v-radio label="Botswana" value="botswana"></v-radio>
      <v-radio label="Brazil" value="brazil"></v-radio>
      <v-radio label="Brunei" value="brunei"></v-radio>
      <v-radio label="Bulgaria" value="bulgaria"></v-radio>
      <v-radio label="Burkina Faso" value="burkina"></v-radio>
      <v-radio label="Burma" value="burma"></v-radio>
      <v-radio label="Burundi" value="burundi"></v-radio>
    </v-radio-group>
    <v-card-actions slot="v-card-actions">
      <v-spacer></v-spacer>
      <v-btn class="blue--text darken-1" flat @click.native="hideDialog">Close</v-btn>
      <v-btn class="blue--text darken-1" flat @click.native="hideDialog">Save</v-btn>
    </v-card-actions>
  </Modal>

  <v-btn class="blue--text darken-1" flat @mousedown.native="show">Dupka</v-btn>
  </div>
</template>

<script>
  import {OPEN_DIALOG, CLOSE_DIALOG} from '../../store/mutation-types';
  import Modal from '../Modal/Modal';

  export default {
    components: {
      Modal
    },
    data () {
      return {
        ddd: true,
        items: [
          {
            action: 'local_activity',
            title: 'Attractions'
          },
          {
            action: 'restaurant',
            title: 'Dining',
            active: true,
            items: [
              {
                title: 'Breakfast & brunch',
                items: [
                  {
                    title: 'Tree'
                  }
                ]
              },
              { title: 'New American' },
              { title: 'Sushi' }
            ]
          },
          {
            action: 'school',
            title: 'Education',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'directions_run',
            title: 'Family',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'healing',
            title: 'Health',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'content_cut',
            title: 'Office',
            items: [
              { title: 'List Item' }
            ]
          },
          {
            action: 'local_offer',
            title: 'Promotions',
            items: [
              { title: 'List Item' }
            ]
          }
        ]
      };
    },
    methods: {
      hideDialog () {
        this.$store.commit(CLOSE_DIALOG);
      },
      show () {
        this.$store.commit(OPEN_DIALOG);
      }
    }
  };
</script>
