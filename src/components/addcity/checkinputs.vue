<template>
<div>
<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
<h1 class="positioning">Are your inputs about {{input}} correct?</h1>
<div style="margin-top:20pt;">
<h2 style="font-family: 'Oswald', sans-serif; margin: auto; width: 800px; text-align: center; background-color:#393939; color: white; padding: 20px; border-radius: 8px;">required inputs</h2>
<div class="positioning, second" >
<table>
  <ul>
    <li><span><h3>Population: {{population}}</h3></span> <br /></li>
    <hr />

    <li><span><h3>Area: {{area}}</h3></span> <br /></li>
  </ul>

</table>

</div>


<h2 v-if="isOptional == 'true'" style="font-family: 'Oswald', sans-serif; width: 800px; text-align: center; margin: auto; background-color:#393939; color: white; padding: 20px; border-radius: 8px;">optional inputs</h2>
<div class="second" v-if="isOptional == 'true'">
  <table>
    <ul>
      <li><span> <h3>Average Temperature: {{avgtemp}}</h3> </span> <br /></li>
      <hr />
      <li><span> <h3>Number of Universities: {{nou}}</h3></span> <br /></li>
      <hr />

      <li><span><h3>Unemployment rate: {{urate}}</h3></span> <br /></li>
      <hr />

      <li><span><h3>Is capital?: {{isCapital}}</h3></span> <br /></li>
      <hr />

      <li><span><h3>hasLakes: {{hasLakes}}</h3></span> <br /></li>
      <hr />

      <li><span><h3>has Trainstation: {{hasTrainstation}}</h3></span> <br /></li>
    </ul>
  </table>

  </div>

</div>

<h2 class="positioning" style="width: 800px; text-align:center; margin: auto;">If you have found <i class="fa fa-search" aria-hidden="true"></i> an issue please make sure to go back and correct him, otherwise click the finish button and we will check <i class="fa fa-check" aria-hidden="true"/> your new cityprofile before publishing.</h2>

<div class="positioning" style="margin-top: 15pt;">
  <b-button class="button" v-on:click="back" > <i class="fa fa-caret-left" aria-hidden="true"/> go back and correct</b-button>
  <b-button class="button" v-on:click="checkinputs">finish<i class="fa fa-check" aria-hidden="true"/></b-button>
</div>

</div>




</template>

<script>

export default {
  name: 'checkinputs',
  data:
  function(){
    return{
      population: localStorage.population,
      area: localStorage.area,
      avgtemp: localStorage.avgtemp,
      nou: localStorage.nou,
      urate: localStorage.urate,
      //Checkboxes
      isCapital: localStorage.isCapital,
      isOptional: localStorage.isOptional,
      hasLakes: localStorage.hasLakes,
      hasTrainstation: localStorage.hasTrainstation,
      input: this.$route.params.input
    }
  },

  methods: {

  back: function(event) {
    if(event){
      this.$router.go(-1)
    }
  },

  checkinputs: function(event){
    if(event){
      alert("Thank you, we will check your cityprofile within the next 24 hours!")
    }
  }
}
}

</script>

<style>

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
  text-align:center;
  border-radius: 8px;
  margin: auto;
  margin-top: 0;
  background-color: lightgrey;
}

</style>
