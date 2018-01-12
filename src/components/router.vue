<template>
<div id="container">
    <h1 class="left">Welcome</h1>
    <p class="left">
      Hi! Welcome to <strong>Citypedia</strong>.<br />
      I wish I could add text that makes sense and fills the page so that you can scroll down to see how the navbar behaves. But I can't!
    </p>
    <p class="right">
      So I will just take the dummy text even if its boring af. <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="left">
      damn, the dummy text takes to much space at the html. Im gonna use a picture instead!
    </p>
    <img src="../assets/filler.png" />
    <div>
   <nav class="navbar navbar-default">
     <div class="container-fluid">
       <div class="navbar-header">
         <a class="navbar-brand" href="#">Auth0 - Vue</a>

         <router-link :to="'/'"
           class="btn btn-primary btn-margin">
             Home
         </router-link>

         <button
           class="btn btn-primary btn-margin"
           v-if="!authenticated"
           @click="login()">
             Log In
         </button>

         <button
           class="btn btn-primary btn-margin"
           v-if="authenticated"
           @click="logout()">
             Log Out
         </button>

       </div>
     </div>
   </nav>

   <div class="container">
     <router-view
       :auth="auth"
       :authenticated="authenticated">
     </router-view>
   </div>
 </div>
</div>

</template>

<script>

import AuthService from '@/auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.center{
  text-align: center;
}

.left {
  text-align: left;
  margin-right: 60%;
}
.right {
  text-align: right;
  margin-left: 40%;
}

#container {
  margin-top: 17px;
  margin-left: 80px;
  margin-right: 80px;
  font-size: 13pt;
  font-family: 'Montserrat', sans-serif;
}
</style>
