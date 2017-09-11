<template>
  <v-app toolbar>
    <NavigationDrawer></NavigationDrawer>
    <v-toolbar fixed class="deep-orange" dark>
      <v-toolbar-side-icon @click.stop="showHideDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <!--v-router-->
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import store from './store'
// import {OPEN_DRAWER} from './store/layout'
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer'

export default {
  name: 'app',
  store,
  components: {
    NavigationDrawer
  },
  methods: {
    showHideDrawer: () => {
      if (store.getters.getDrawer) {
        console.log('app CLOSE_DRAWER')
        store.commit('CLOSE_DRAWER', {})
      } else {
        console.log('app OPEN_DRAWER')
        store.commit('OPEN_DRAWER', {})
      }

      // console.log('drawer', store.getters.abc)
    }
  }
}
</script>
