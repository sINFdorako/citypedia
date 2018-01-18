import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import router from '@/components/router'
import addcity from '@/components/addcity/addcity'
import citydetails from '@/components/addcity/citydetails'
import cityphots from '@/components/addcity/cityphots'
import checkinputs from '@/components/addcity/checkinputs'
import citycard from '@/components/citycard'
import cityprofile from '@/components/cityprofile'




Vue.use(router)
Vue.use(Router)
Vue.use(VueResource)

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
      path: '/citydetails/cityphots/:input',
      name: 'cityphots',
      component: cityphots
    },
    {
      path: '/citydetails/cityphots/checkinputs/:input',
      name: 'checkinputs',
      component: checkinputs
    },
    {
      path: '/citycard',
      name: 'citycard',
      component: citycard
    },
    {
      path: '/cityprofile/:cityname',
      name: 'cityprofile',
      component: cityprofile
    },
  ]
})
