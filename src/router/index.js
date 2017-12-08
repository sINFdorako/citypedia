import Vue from 'vue'
import Router from 'vue-router'
import router from '@/components/router'
import addcity from '@/components/addcity/addcity'
import citydetails from '@/components/addcity/citydetails'
import cityphots from '@/components/addcity/cityphots'



Vue.use(router)
Vue.use(Router)
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
    path: '/cityphots/:input',
    name: 'cityphots',
    component: cityphots

  },
  ]
})
