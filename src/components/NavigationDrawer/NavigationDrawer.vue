<template>
  <v-navigation-drawer
    temporary
    v-model="drawer"
    light
    overflow
    absolute
  >
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>John Leider</v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  computed: {
    drawer: {
      get () {
        console.log('get drawer', this.$store.getters.getDrawer)
        return this.$store.getters.getDrawer
      },
      set (value) {
        console.log('value', value, this.$store.getters.getDrawer)
        if (value !== this.$store.getters.getDrawer) {
          if (value) {
            console.log('set drawer', true)
            this.$store.commit('OPEN_DRAWER')
          } else {
            console.log('set drawer', false)
            this.$store.commit('CLOSE_DRAWER')
          }
        }
      }
    }
  },
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    }
  }
}
</script>