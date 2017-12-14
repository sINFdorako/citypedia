<template>
  <div>

    <h1 class="positioning"> More details about {{input}}</h1>
    <div class="positioning">
      <h3></h3>

      <select id="dropdownlist" class="input" v-on:change="validated = 1">
        <option selected disabled value="">Country</option>
        <option v-bind:value="obj" v-for="(obj, key) in countries">{{countries[key].name}}</option>
      </select>
    </div>

    <div class="positioning">
      <h3>Population</h3>

      <input id="myTextBox" class="input" type="number" v-model="population" :disabled="validated == 0" placeholder="Population" min="1" max="10000000" value="localStorage.population">

    </div>

    <div class="positioning">
      <h3>Area in km²</h3>


      <input id="myTextBox" class="input" type="number" v-model="area" :disabled="validated == 0" placeholder="Area in km²" value="localStorage.area">

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

  mounted: function() {
    //Capitalize first letter of input
    $(document).ready(function() {
        $('input').on('keydown', function(event) {
            if (this.selectionStart == 0 && event.keyCode >= 65 && event.keyCode <= 90 && !(event.shiftKey) && !(event.ctrlKey) && !(event.metaKey) && !(event.altKey)) {
               var $t = $(this);
               event.preventDefault();
               var char = String.fromCharCode(event.keyCode);
               $t.val(char + $t.val().slice(this.selectionEnd));
               this.setSelectionRange(1,1);
            }
        });
    });
    //Request
   this.$http.get('//restcountries.eu/rest/v2/all')
   .then(function(resp) {
     this.countries = resp.body;
   })
   .catch(function(err) {
     this.countries = "Something went wrong: " +err
   })
  },
  data:
  function(){
    return {
       input: this.$route.params.input,

       countries: [],
       validated: 0,
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
     oneDot: function(input){
       var value = input.value,
       value = value.split('.').join('');
       if (value.length > 3) {
         value = value.substring(0, value.length - 3) + '.' + value.substring(value.length - 3, value.length);
   }
      input.value = value;
 },

     back: function(event) {
         if(event){
           this.$router.go(-1)
         }
       },

       checkinput: function(event){
         if(event){

           /*if (this.$data.population == null || this.$data.population == '' || this.$data.area == null || this.$data.area == '' || this.$data.country == null || this.$data.country == '') {
             alert("Please fill in the empty fields")
           }else{*/
           this.$router.push({ path: 'cityphots/' +this.$data.input})
           localStorage.setItem("country", this.$data.country)
           localStorage.setItem("population", this.$data.population)
           localStorage.setItem("area", this.$data.area)
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
