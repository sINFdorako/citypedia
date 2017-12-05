import Vue from 'vue'
import Router from 'vue-router'
import router from '@/components/router'
import addcity from '@/components/addcity/addcity'
import details from '@/components/addcity/details'


Vue.use(router)
Vue.use(Router)
Vue.use(addcity)
Vue.use(details)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'router',
      component: router
    },
    {
      path: '/addcity',
      name: 'addcity',
      component: addcity
    },
    {
      path: '/details/:input',
      name: 'details',
      component: details

    },
  ]
})
