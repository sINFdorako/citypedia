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


async function auth() {
  return await authPromise();
}

function authPromise() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open("POST", 'http://localhost:3000/api/userauth',true);
    xhr.setRequestHeader("Authorization", window.sessionStorage.citypediatoken);

    xhr.onreadystatechange  = () => {
      if(xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.response)
        if(JSON.parse(xhr.response).loggedin) {
          resolve();
        } else {
          reject();
        }
      }
    }

    xhr.onerror = () => {
      reject();
    }

    xhr.send();
  });
}



function checkIfLoggedIn(to, from, next) {
  auth().then(result => {
    next();
  }, () => {
    next('/');
  });

}


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
      component: addcity,
      beforeEnter: checkIfLoggedIn
    },
    {
      path: '/citydetails/:input',
      name: 'citydetails',
      component: citydetails
      beforeEnter: checkIfLoggedIn

    },
    {
      path: '/citydetails/cityphots/:input',
      name: 'cityphots',
      component: cityphots
      beforeEnter: checkIfLoggedIn
    },
    {
      path: '/citydetails/cityphots/checkinputs/:input',
      name: 'checkinputs',
      component: checkinputs
      beforeEnter: checkIfLoggedIn
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
