<template>

  <b-navbar id="nav_bar" toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>


    <b-navbar-brand v-on:click="scrollTop" href="#"> </b-navbar-brand>


    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">A-Z</b-nav-item>
        <b-nav-item href="#">Ranking</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item :to="{ path: '/addcity' }">Add City</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form class="searchfunc">
          <b-form-input size="sm" position="center" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <img id="usr" src="../assets/user.png">
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  <!-- navbar-1.vue -->
</template>

<script>
export default {
  name: 'pagenavbar',
  methods: {
    scrollTop: function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
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

.disable-select {
  outline: none;
}

.animationIn {
  opacity: 0;
  animation-name: bounceIn;
  animation-duration: 450ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

#usr {
  height: 32px;
  width: auto;
}

.searchfunc{
  margin-left: 200pt;
}
.navbar-fixed {
    top: 0;
    z-index: 100;
  position: fixed;
    width: 100%;
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
</style>
