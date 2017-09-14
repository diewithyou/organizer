<template>
  <v-app toolbar>
    <NavigationDrawer/>
    <TopBar/>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import store from './store'
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer'
import TopBar from './components/TopBar/TopBar'

export default {
  store,
  components: {
    NavigationDrawer,
    TopBar
  }
}
</script>
