
<template>

  <div>
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">

    <h1 style="text-align: center; margin-top: 50pt; font-family: 'Lobster', cursive;">{{cityname}} <img style="height: 30px;" :src="countrydata[0].flag"/></h1>

    <hr />
    <div class="firstdiv" >
      <img :src="city[0].link" alt="image" style=" width: 650px; height 450px; box-shadow: 8px 8px 10px #aaa;"/>
    </div>

    <div class="seconddiv">

    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
    <div style="margin-top:20pt;">
    <h2 style="font-family: 'Oswald', sans-serif; margin: auto; width: 800px; text-align: center; background-color:#393939; color: white; padding: 20px; border-radius: 8px;">more information about {{city[0].cityname}}</h2>
    <div class="positioning, second" >
    <table>
      <ul>
          <li><span><h3>Country: {{city[0].country}}</h3></span> <br /></li>
          <hr />

        <li><span><h3>Population: {{city[0].population}}</h3></span> <br /></li>
        <hr />

        <li><span><h3>Area: {{city[0].area}}</h3></span> <br /></li>
        <hr />

      </ul>

    </table>

    </div>


    <h2 v-if="isOptional == 'true'" style="font-family: 'Oswald', sans-serif; width: 800px; text-align: center; margin: auto; background-color:#393939; color: white; padding: 20px; border-radius: 8px;">optional inputs</h2>
    <div class="second" v-if="isOptional == 'true'">
      <table>
        <ul>
          <li><span> <h3>Average Temperature: {{city[0].avgtemp}}</h3> </span> <br /></li>
          <hr />
          <li><span> <h3>Number of Universities: {{city[0].nou}}</h3></span> <br /></li>
          <hr />

          <li><span><h3>Unemployment rate: {{city[0].urate}}</h3></span> <br /></li>
          <hr />

          <li><span><h3>Is capital?: {{city[0].isCaptial}}</h3></span> <br /></li>
          <hr />

          <li><span><h3>hasLakes: {{city[0].hasLakes}}</h3></span> <br /></li>
          <hr />

          <li><span><h3>has Trainstation: {{city[0].hasTrainstation}}</h3></span> <br /></li>
        </ul>
      </table>
      </div>
  </div>
</div>

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
      this.$http.get('https://restcountries.eu/rest/v2/name/'+this.countryname+'?fullText=true')
      .then(function(resp) {
        console.log(resp.body);
        console.log("req2");
        this.countrydata = resp.body;
      })
      .catch(function(err) {
        this.countrydata = "Something went wrong" +err
      })

    })
    .catch(function(err) {
      this.cities = "Something went wrong: " +err
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

.positioning{
  padding-top: 30pt;
  padding-bottom: 20pt;
  text-align: center;
}

.second{
  font-family: 'Oswald', sans-serif;
  padding-top: 30pt;
  width: 800px;
  padding: 10px;
  background-color: none;
  border-radius: 8px;
  margin: auto;
  margin-top: 0;
  background-color: #f7f6f5;
}

.firstdiv{
  float: left;
  margin-left: 2%;
}

.seconddiv{
  float: right;
  margin-right: 2%;
}

</style>
