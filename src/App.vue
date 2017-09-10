<template>
  <v-app toolbar>
    <NavigationDrawer :drawer="drawer"></NavigationDrawer>
    <v-toolbar fixed class="deep-orange" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer'

export default {
  name: 'app',
  components: {
    NavigationDrawer
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
