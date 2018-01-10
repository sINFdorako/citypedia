<template>
<div id="container">
    <h1 class="left">Welcome</h1>
    <p class="center">
      Hi! Welcome to <strong>Citypedia</strong>.<br />
    Here you can get different stats about Cities.<br/>
  <strong>Looking for a special City?</strong>
  <h2 class="center"> Write it in the Searchbar below!</h2>
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
  font-size: 20pt;
}

.left {
  text-align: left;
  margin-right: 60%;
}
.right {
  text-align: right;
  margin-left: 40%;
}
h2 {
  text-decoration: underline;
}

#container {
  margin-top: 17px;
  margin-left: 80px;
  margin-right: 80px;
  font-size: 13pt;
  font-family: 'Montserrat', sans-serif;
}
</style>
