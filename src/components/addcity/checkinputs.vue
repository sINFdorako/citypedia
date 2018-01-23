<template>

  <div>

      <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
      <h1 class="positioning">Are your inputs about {{input}} correct?</h1>
      <div style="margin-top:20pt;">
      <h2 class="h2first">required inputs</h2>


      <div class="positioning, box" >


        <table>

          <ul>

            <li><span><h3>Country: {{country}}</h3></span> <br /></li>
            <hr />
            <li><span><h3>Population: {{population}}</h3></span> <br /></li>
            <hr />
            <li><span><h3>Area: {{area}}</h3></span> <br /></li>
            <hr />
            <li><span><img :src="link" class="previewimg" alt="image"></img></span> <br /></li>

          </ul>

       </table>

     </div>


     <h2 v-if="isOptional == 'true'" class="h2first">optional inputs</h2>

     <div class="positioning box" v-if="isOptional == 'true'">

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


      <h2 class="positioning secondh2">If you have found <i class="fa fa-search" aria-hidden="true"></i>
      an issue please make sure to go back and correct it, otherwise click the finish button and we will check
      <i class="fa fa-check" aria-hidden="true"/> your new cityprofile before publishing.</h2>

      <div class="positioning" style="margin-top: 15pt;">
        <b-button class="button" v-on:click="back" > <i class="fa fa-caret-left" aria-hidden="true"/> go back and correct</b-button>
        <b-button class="button" v-on:click="checkinputs">finish<i class="fa fa-check" aria-hidden="true"/></b-button>
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
      cityname: localStorage.cityname,
      country: localStorage.country,
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
      input: this.$route.params.input,
      link: localStorage.link
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
      this.$http.post("http://localhost:3000/api/cities", {cityname: localStorage.getItem("cityname"), country: localStorage.getItem("country"), population: localStorage.getItem("population"), area: localStorage.getItem("area"),
              avgtemp: localStorage.getItem("avgtemp"), nou: localStorage.getItem("nou"), urate: localStorage.getItem("urate"), isCapital: localStorage.getItem("isCapital"), hasLakes: localStorage.getItem("hasLakes"), hasTrainstation: localStorage.getItem("hasTrainstation"), link: localStorage.getItem("link")}).then((respnonse) => {
                localStorage.clear();
                document.location.href="/";
              });
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

.box{
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

.h2first{
   font-family: 'Oswald', sans-serif;
   margin: auto;
   width: 800px;
   text-align: center;
   background-color:#393939;
   color: white;
   padding: 20px;
   border-radius: 8px;
}

.previewimg{
  width: 350px;
  height: 250px;
  margin-right: 60px;
  box-shadow: 8px 8px 10px #aaa;
}

.secondh2{
  width: 800px;
  text-align:center;
  margin: auto;
}

</style>
