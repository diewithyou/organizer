import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Calendar from '@/components/Calendar/Calendar'
import About from '@/components/About/About'
import NotFound from '@/components/NotFound/NotFound'
import Test from '@/components/Test/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
