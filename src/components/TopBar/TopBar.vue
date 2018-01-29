<template>
  <v-toolbar fixed class="light-blue" dark>
    <v-toolbar-side-icon @click.stop="showHideDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Organizer</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {OPEN_DRAWER, CLOSE_DRAWER} from '../../store/mutation-types';

  export default {
    computed: {
      ...mapGetters([
        'getDrawer'
      ])
    },
    methods: {
      showHideDrawer () {
        if (this.getDrawer) {
          this.$store.commit(CLOSE_DRAWER);
        } else {
          this.$store.commit(OPEN_DRAWER);
        }
      }
    }
  };
</script>