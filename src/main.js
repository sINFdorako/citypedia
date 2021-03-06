// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta'
import VueClip from 'vue-clip'
import GSignInButton from 'vue-google-signin-button'

Vue.use(GSignInButton)
Vue.use(VueClip)
Vue.use(Meta)
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FileUploadService } from 'v-file-upload'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
