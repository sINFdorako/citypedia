<template>

  <b-navbar id="nav_bar" toggleable="md" type="dark" variant="dark">


<!--    <b-navbar-brand  id="navbrand" v-on:click="scrollTop" href="#"> </b-navbar-brand> -->

      <b-navbar-nav class="mr-auto">
        <b-nav-item class="hvr-underline-from-center" :to="{ path: '/citycard' }"><i class="fa fa-university" aria-hidden="true"></i>
Cities</b-nav-item>
        <!--<b-nav-item class="hvr-underline-from-center" :to="{ path: '/ranking' }"><i class="fa fa-trophy" aria-hidden="true"></i>
Ranking</b-nav-item>-->
        <b-nav-item class="hvr-underline-from-center" id="addcity" :to="{ path: '/addcity' }"><i class="fa fa-plus" aria-hidden="true"></i>
Add City</b-nav-item>



      </b-navbar-nav>
      <b-navbar-nav>
        <g-signin-button  class="g-signin-button hvr-underline-from-center" v-if="! loggedIn()"
          :params="{client_id: '340370812528-fqkdef2ah126p3i1opeuqslgtv9vnu61.apps.googleusercontent.com'}"
          @success="onSignInSuccess"
          @error="onSignInError">
          <i class="fa fa-sign-in" aria-hidden="true"></i>
          Login
        </g-signin-button>
        <b-nav-item  class="hvr-underline-from-center" v-if="loggedIn()" v-on:click="logout()">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          Logout ({{user}})
        </b-nav-item>
      </b-navbar-nav>


      <!-- doubled in class because centering otherwise seems impossible -->
  <!--    <b-nav-form id="searchbar" form class="mr-sm-5">
        <b-nav-form form class="mr-sm-5">
        <input size="80" class="mr-sm-5 searchfunc" type="text" placeholder="Search"/>
        </b-nav-form>
      </b-nav-form>
    -->

      <!-- Right aligned nav items -->
    <!--  <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!- Using button-content slot ->
          <template slot="button-content">
            <img id="usr" src="../assets/user.png">
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
  </b-navbar>
</template>

<script>
export default {
  name: 'pagenavbar',
  watch: {
    $route: function(){
      if(this.$route.path !== '#'){
        $('#searchbar').hide();
      }
    }
  },
  methods: {
    scrollTop: function () {
      if(document.location="/#/"){
        $("html, body").animate({ scrollTop: 0 }, "slow");
      } else {
        document.location.href = "/";
      }

    },
    loggedIn() {
  /*    var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var client = new auth.OAuth2('340370812528-fqkdef2ah126p3i1opeuqslgtv9vnu61.apps.googleusercontent.com', '', '');
client.verifyIdToken(
    token,
    '340370812528-fqkdef2ah126p3i1opeuqslgtv9vnu61.apps.googleusercontent.com',
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
    function(e, login) {
      var payload = login.getPayload();
      var userid = payload['sub'];
      // If request specified a G Suite domain:
      //var domain = payload['hd'];
    });*/
      return (this.user != "");
    },
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      this.user = googleUser.getBasicProfile().ig; // etc etc
      window.sessionStorage.citypediaUser = googleUser.getBasicProfile().ig;
      console.log("YAY")
      console.log(googleUser.getBasicProfile())
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    logout() {
      window.sessionStorage.citypediaUser = "";
      document.location.href = 'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:8000';
    }

  },
  data: function() {
    return {
      user: "",
    }
  },
  created: function(){

    this.user = window.sessionStorage.citypediaUser;
    if (this.user == null) {
      this.user = "";
    }

    $(document).ready(function() {

      $(window).scroll(function () {

      //    console.log($(window).scrollTop())
        if ($(window).scrollTop() > 280) {
          $('#nav_bar').addClass('navbar-fixed');
          //$('#navbrand').addClass('animationIn');
          //document.getElementById('navbrand').innerHTML = 'Citypedia';
        }
        if ($(window).scrollTop() < 281) {
          $('#nav_bar').removeClass('navbar-fixed');
          //$('#navbrand').removeClass('animationIn');
          //document.getElementById('navbrand').innerHTML = '';
        }
      });
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>


a:focus, li:focus {
  border:none;
  outline: none;
}

.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 3px 0 #0f69ff;
  cursor: pointer;
}

input {
  text-align: center;
  height: 30px;
  border:none;
  border-radius: 10px;
}

.animationIn {
  opacity: 0;
  animation-name: bounceIn;
  animation-duration: 450ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}


#navbrand {
  width: 80px;
}

#usr {
  height: 32px;
  width: auto;
}


.searchfunc {
  text-align: center;
}

.navbar-fixed {
    top: 0px;
    z-index: 100;
    position: sticky;
    width: 100%;
}

.bg-dark {
    background-color: #393939 !important;
}

@keyframes bounceIn{
  0%{
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
}

.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  position: relative;
  overflow: hidden;
}

.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 50%;
  right: 50%;
  bottom: 0;
  background: white;
  height: 2px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}
</style>
