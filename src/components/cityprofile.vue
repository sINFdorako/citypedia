
<template>

  <div>
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">

    <h1 style="text-align: center; margin-top: 50pt; font-family: 'Lobster', cursive;">{{cityname}} <img style="height: 30px;" :src="countrydata[0].flag"/></h1>

    <hr />

    <img :src="city[0].link" alt="image" style=" width: 1000px; height 750px; box-shadow: 8px 8px 10px #aaa; margin-left: 300px; margin-right: 200px;"/>

    <h3>Population: {{city[0].population}}</h3>
  </div>

</template>

<script>

export default {
  name: 'cityprofile',
  created: function(){
    this.$http.get('http://localhost:3000/api/city/'+this.$route.params.cityname)
    .then(function(resp) {
      this.city = resp.body;
      this.countryname =  this.city[0].country;
      console.log(this.countryname);
    })
    .catch(function(err) {
      this.cities = "Something went wrong: " +err
    })

    this.$http.get('https://restcountries.eu/rest/v2/name/Netherlands?fullText=true')
    .then(function(resp) {
      console.log(resp.body);
      console.log("req2");
      this.countrydata = resp.body;
    })
    .catch(function(err) {
      this.countrydata = "Something went wrong" +err
    })

},
  data:
  function(){
    return {
      cityname: this.$route.params.cityname,
      city: [{}],
      countrydata: [{}],
      countryname: ""
    };
  },
}

</script>

<style scoped>

</style>
