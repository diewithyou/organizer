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
          <img src="https://www.singularityweblog.com/wp-content/uploads/2016/02/Death.jpg" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>death</v-list-tile-title>
        </v-list-tile-content>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title" :to="item.href" :disabled="item.disabled">
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
import {mapGetters} from 'vuex'
import {OPEN_DRAWER, CLOSE_DRAWER} from '../../store/mutation-types'

export default {
  computed: {
    ...mapGetters([
      'getDrawer'
    ]),
    drawer: {
      get () {
        return this.getDrawer
      },
      set (value) {
        if (value !== this.getDrawer) {
          this.$store.commit(value ? OPEN_DRAWER : CLOSE_DRAWER)
        }
      }
    }
  },
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard', href: 'home' },
        { title: 'Calendar', icon: 'date_range', disabled: true },
        { title: 'Settings', icon: 'settings', disabled: true },
        { title: 'My profile', icon: 'person', disabled: true },
        { title: 'About', icon: 'question_answer', href: 'about' }
      ]
    }
  }
}
</script>