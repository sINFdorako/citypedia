import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import router from '@/components/router'
import addcity from '@/components/addcity/addcity'
import citydetails from '@/components/addcity/citydetails'
import cityphots from '@/components/addcity/cityphots'



Vue.use(router)
Vue.use(Router)
Vue.use(VueResource)
Vue.use(addcity)
Vue.use(citydetails)
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
      path: '/citydetails/cityphots/:input',
      name: 'cityphots',
      component: cityphots
    },

  ]
})
