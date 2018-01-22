<template>
<div id="container">

    <h1 class="left">Welcome</h1>
    <p class="left">
      Hi! Welcome to <strong>Citypedia</strong>.<br />

    </p>
    <p class="right">
      This is a Website about Cities!<br />
      You can checkout different stats about cities.<br />
      If you wanna <u>add</u> a city, you have to Login with your <strong>Google Account</strong>!
    </p>

   </nav>
 </div>

</template>

<script>

export default {
  name: 'app',

//   created: function(){
//     this.$http.get('http://localhost:3000/api/city/'+this.$route.params.cityname)
//     .then(function(resp) {
//       this.city = resp.body;
//     })
//     .catch(function(err) {
//       this.cities = "Something went wrong: " +err
//     })
//
// },
//   data:
//   function(){
//     return {
//       cityname: this.$route.params.cityname,
//       city: []
//     };
//   },
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
  margin-left: 5%;
  font-size: xx-large;
  padding-top: 3%
}
.right {
  text-align: start;
  margin-left: 50%;
  font-size: xx-large;

}

#container {
  font-family: 'Montserrat', sans-serif;
  background-image: url(https://media.wired.com/photos/59e644e21a7a784c71f7d86d/2:1/w_2500,c_limit/TorontoSkyline-HP-553395387.jpg);
  font-size: 13pt;
}
</style>
