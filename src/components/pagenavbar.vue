<template>

  <b-navbar id="nav_bar" toggleable="md" type="dark" variant="dark">

<!--    <b-navbar-brand  id="navbrand" v-on:click="scrollTop" href="#"> </b-navbar-brand> -->

      <b-navbar-nav class="mr-auto">
        <b-nav-item class="hvr-underline-from-center" href="#"><i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>
A-Z</b-nav-item>
        <b-nav-item class="hvr-underline-from-center" href="#"><i class="fa fa-trophy" aria-hidden="true"></i>
Ranking</b-nav-item>
        <b-nav-item class="hvr-underline-from-center" id="addcity" :to="{ path: '/addcity' }"><i class="fa fa-plus" aria-hidden="true"></i>
Add City</b-nav-item>
      </b-navbar-nav>
      <!-- doubled in class because centering otherwise seems impossible -->
      <b-nav-form id="searchbar" form class="mr-sm-5">
        <b-nav-form form class="mr-sm-5">
        <input size="80" class="mr-sm-5 searchfunc" type="text" placeholder="Search"/>
        </b-nav-form>
      </b-nav-form>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <img id="usr" src="../assets/user.png">
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
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

    }

  },
  created: function(){
    $(document).ready(function() {

      $(window).scroll(function () {

      //    console.log($(window).scrollTop())
        if ($(window).scrollTop() > 280) {
          $('#nav_bar').addClass('navbar-fixed');
          $('#navbrand').addClass('animationIn');
          document.getElementById('navbrand').innerHTML = 'Citypedia';
        }
        if ($(window).scrollTop() < 281) {
          $('#nav_bar').removeClass('navbar-fixed');
          $('#navbrand').removeClass('animationIn');
          document.getElementById('navbrand').innerHTML = '';
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
