import Vue from 'vue'
import Router from 'vue-router'
import router from '@/components/router'
import addcity from '@/components/addcity/addcity'
import citydetails from '@/components/addcity/citydetails'
import ranking from '@/components/ranking/ranking'


Vue.use(router)
Vue.use(Router)
Vue.use(addcity)
Vue.use(citydetails)
Vue.use(ranking)

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
  ]
})
