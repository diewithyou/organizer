import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import NotFound from '@/components/NotFound/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
