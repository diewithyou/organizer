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
      </v-list-tile>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-group v-for="item in items" :key="item.title" :value="item.active">
        <v-list-tile slot="item" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action v-show="!item.to">
            <v-icon>keyboard_arrow_down</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" :to="subItem.to">
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {OPEN_DRAWER, CLOSE_DRAWER} from '../../store/mutation-types';

  export default {
    computed: {
      ...mapGetters([
        'getDrawer'
      ]),
      drawer: {
        get () {
          return this.getDrawer;
        },
        set (value) {
          console.log('val', value);
          if (value !== this.getDrawer) {
            this.$store.commit(value ? OPEN_DRAWER : CLOSE_DRAWER);
          }
        }
      }
    },
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard', to: 'home' },
          { title: 'Calendar', icon: 'date_range', to: 'calendar' },
          { title: 'Finances', icon: 'assessment', disabled: true, to: 'finances' },
          { title: 'Settings', icon: 'settings', disabled: true, items: [{title: 'Add task', to: 'typeoftasks'}, {title: 'Do something', to: 'dosomething'}] },
          { title: 'My profile', icon: 'person', disabled: true, to: 'profile' },
          { title: 'About', icon: 'question_answer', to: 'about' },
          { title: 'Test', icon: 'toys', to: 'test' }
        ]
      };
    }
  };
</script>
