<template>
<div>
<h1 class="positioning">Are your inputs correct?</h1>

<div class="positioning">
  <span>Population: {{population}}</span> <br />
  <span>Area: {{area}}</span> <br />
<div v-if="isOptional == 'true'">
  <span>Average Temperature: {{avgtemp}}</span> <br />
  <span>Number of Universities: {{nou}}</span> <br />
  <span>Unemployment rate: {{urate}}</span> <br />
  <span>Is capital?: {{isCapital}}</span> <br />
  <span>hasLakes: {{hasLakes}}</span> <br />
  <span>has Trainstation: {{hasTrainstation}}</span> <br />
  </div>
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
      hasTrainstation: localStorage.hasTrainstation
    }
  }
}

</script>

<style>

.positioning{
  padding-top: 20pt;
  padding-bottom: 20pt;
  text-align: center;
}

</style>
