<template>
  <v-dialog v-model="dialog" scrollable>
    <!--<v-btn primary dark slot="activator">Open Dialog</v-btn>-->
    <v-card>
      <v-card-title>
        <span class="headline">{{title}}</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <slot name="body"></slot>
      </v-card-text>
      <v-divider></v-divider>
      <slot name="v-card-actions"></slot>
    </v-card>
  </v-dialog>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {OPEN_DIALOG, CLOSE_DIALOG} from '../../store/mutation-types'

  export default {
    props: ['title'],
    computed: {
      ...mapGetters([
        'getDialog'
      ]),
      dialog: {
        get () {
          return this.getDialog
        },
        set (value) {
          this.$store.commit(value ? OPEN_DIALOG : CLOSE_DIALOG)
        }
      }
    }
  }
</script>
