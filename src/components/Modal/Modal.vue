<template>
  <v-dialog v-model="dialog" scrollable>
    <v-btn primary dark slot="activator">Open Dialog</v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Select Country</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <slot name="body"></slot>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
