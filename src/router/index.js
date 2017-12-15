import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import router from '@/components/router'
import addcity from '@/components/addcity/addcity'
import citydetails from '@/components/addcity/citydetails'
import cityphots from '@/components/addcity/cityphots'
import stadtprofil from '@/components/addcity/stadtprofil'

import ranking from '@/components/ranking/ranking'




Vue.use(router)
Vue.use(Router)

Vue.use(VueResource)
Vue.use(addcity)
Vue.use(citydetails)

Vue.use(ranking)
Vue.use(cityphots)

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
      path: '/citydetails/:input',
      name: 'citydetails',
      component: citydetails

    },
    {

      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/citydetails/cityphots/:input',
      name: 'cityphots',
      component: cityphots
    },
    {
      path: '/citydetails/cityphots/stadtprofil/:input',
      name: 'stadtprofil',
      component: stadtprofil
    },
  ]
})
