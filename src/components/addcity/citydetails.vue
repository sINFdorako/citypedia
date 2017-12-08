<template>
  <div>

    <h1 class="positioning"> More details about {{input}} </h1>
    <div class="positioning">
      <h3>Country</h3>
      <input id="myTextBox" class="input" type="text" v-model="country" placeholder="Country" value="localStorage.country" >
    </div>

    <div class="positioning">
      <h3>Population</h3>
      <input id="myTextBox1" class="input" type="text" v-model="population" placeholder="Population" value="localStorage.population">
    </div>

    <div class="positioning">
      <h3>Area in km²</h3>

      <input id="myTextBox2" class="input" type="text" v-model="area" placeholder="Area in km²" value="localStorage.area">

    </div>

    <div class="positioning">
      <b-button class="button" v-on:click="back" > back </b-button>
      <b-button  class="button" v-on:click="checkinput" >go on</b-button>
    </div>

  </div>

</template>


<script>
export default {
  name: 'citydetails',
  data: function(){
    return {
       input: this.$route.params.input,
       population: localStorage.population,
       area: localStorage.area,
       country: localStorage.country
    };
  },

  created: function(){
    $(document).ready(function() {
      $('#myTextBox').val(localStorage.country);
      $('#myTextBox1').val(localStorage.population);
      $('#myTextBox2').val(localStorage.area);
    });
  },

   methods: {

       back: function(event) {
         if(event){
           this.$router.go(-1)
         }
       },

       checkinput: function(event){
         if(event){
           var myTextBox = document.getElementById("myTextBox").value;
           var myTextBox1 = document.getElementById("myTextBox1").value;
           var myTextBox2 = document.getElementById("myTextBox2").value;

           if (this.$data.population == null || this.$data.area == null || this.$data.country == null) {
             alert("Please fill in the empty fields")
           }else{
           this.$router.push({ path: 'cityphots/' +this.$data.input})
           localStorage.setItem("country", this.$data.country)
           localStorage.setItem("population", this.$data.population)
           localStorage.setItem("area", this.$data.area)
         }
       }
     }
   }
}

</script>

<style scoped>


.positioning{
  margin-top: 25pt;
  text-align: center
}

.input{
 padding: 8pt;
 text-align: center;
 height:50px;
 width: 350px;
 border:solid grey 2px;
 border-radius: 200px;

}

.button{
  margin-top: 30pt;
}

</style>
