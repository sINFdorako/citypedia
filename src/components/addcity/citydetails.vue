<template>
  <div>

    <h1 style="text-align: center; margin-top: 20pt;"> More details about {{input}}   <img id="flag"/></h1>

<div id="flagdiv">

</div>
    <div class="positioning">
      <select id="dropdownlist" class="input" v-on:change="saveValue">
        <option selected disabled value="">Country</option>
        <option id="options" value="obj" v-bind:value="obj" v-for="(obj, key) in countries">{{countries[key].name}}</option>
      </select>

    </div>

<hr />

    <div class="positioning">
      <h3>Population</h3>
      <input id="ptextbox" class="input" type="number" v-model="population" :disabled="validated == 0" placeholder="Population" min="1" max="10000000" value="localStorage.population">
    </div>

    <div class="positioning">
      <h3>Area in km²</h3>
      <input id="aiktextbox" class="input" type="number" v-model="area" :disabled="validated == 0" placeholder="Area in km²" value="localStorage.area">
    </div>

    <div id="capitalcheckbox">
    <b-form-checkbox id="capitalcheckbox"
                      v-model="isCapital"
                      value="true"
                      unchecked-value="false">
                      Capital city
    </b-form-checkbox>
      </div>

<hr  />
    <div id="centerCheckbox">
        <b-form-checkbox id="optinfocheckbox"
                          v-model="isOptional"
                          value="true"
                          unchecked-value="false">
                          optional info
        </b-form-checkbox>
    </div>
    <div id="optional" v-if="isOptional == 'true'">
      <hr />

<div id="optionalcheckboxes">
<b-form-checkbox id="hastrainstationoncheckbox"
v-model="hasTrainstation"
value="true"
unchecked-value="false">
Has train station
</b-form-checkbox> <b-form-checkbox id="haslakescheckbox"
v-model="hasLakes"
value="true"
unchecked-value="false">
Has lakes
</b-form-checkbox>
        </div>


    <div class="positioning">
      <h3>Average temperature °C</h3>
      <input id="avgtemptextbox" class="input" type="number"
            v-model="avgtemp" :disabled="validated == 0" placeholder="Average temperature °C"
            min="1" max="60" value="localStorage.avgtemp">
    </div>

<div class="positioning">
<h3>Number of universities</h3>
<input id="noutextbox" class="input" type="number"
v-model="nou" :disabled="validated == 0" placeholder="Number of universities" value="localStorage.nou">
</div>

<div class="positioning">
<h3>Unemployment rate</h3>
<input id="uratetextbox" class="input" type="number" v-model="urate" :disabled="validated == 0" placeholder="Unemployment rate" value="localStorage.uerate">
</div>

</div>

<div class="positioning">
<b-button class="button" v-on:click="back" ><i class="fa fa-caret-left" aria-hidden="true"></i>
 back </b-button>
<b-button  class="button" v-on:click="checkinput" >go on <i class="fa fa-caret-right" aria-hidden="true"></i>
</i>
</b-button>
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
       country: localStorage.country,
       validated: 0,
       //Inputs
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

    };
  },

  created: function(){
    $(document).ready(function() {
      $('#ptextbox').val(localStorage.population);
      $('#aiktextbox').val(localStorage.area);
      $('#capitalcheckbox').val(localStorage.isCapital);
      $('#avgtemptextbox').val(localStorage.avgtemp);
      $('#noutextbox').val(localStorage.nou);
      $('#uratetextbox').val(localStorage.urate);
      $('isOptional').val(localStorage.isOptional);
      $('#hastrainstationoncheckbox').val(localStorage.hasTrainstation);
      $('#haslakescheckbox').val(localStorage.hasLakes);
      $('#avgtemptextbox').val(localStorage.avgtemp);
      $('#noutextbox').val(localStorage.nou);
      $('#uratetextbox').val(localStorage.urate);
    });
  },

   methods: {
     saveValue: function(){
       var dropdownindex = $('#dropdownlist').find(":selected").index();
       var type = document.getElementById("dropdownlist").value;
       this.$data.validated = 1;
       localStorage.setItem("country",type);
       document.getElementById("flag").src=this.countries[dropdownindex-1].flag;
     },
     back: function(event) {
         if(event){
           this.$router.go(-1)
         }
       },

       checkinput: function(event){
         if(event) {

           if ( this.$data.population == null
             || this.$data.population == ''
             || this.$data.area == null
             || this.$data.area == '') {
             alert("Please fill in the empty fields")
           }else{
           this.$router.push({ path: 'cityphots/' +this.$data.input})
           localStorage.setItem("population", this.$data.population)
           localStorage.setItem("area", this.$data.area)
           localStorage.setItem("isCapital", this.$data.isCapital)
           localStorage.setItem("avgtemp", this.$data.avgtemp)
           localStorage.setItem("nou", this.$data.nou)
           localStorage.setItem("urate", this.$data.urate)
           localStorage.setItem("isOptional", this.$data.isOptional)
           localStorage.setItem("hasTrainstation", this.$data.hasTrainstation)
           localStorage.setItem("hasLakes", this.$data.hasLakes)
         }
       }
     }
   }
 }




</script>

<style scoped>

#capitalcheckbox{
  text-align: center;
}

#optionalcheckboxes{
  text-align: center;
}

#flag{
  height: 30px;
  margin-left: 5px;
  padding-bottom: 3px;
  width: auto;
}

#centerCheckbox {
  text-align: center;
  align-self: center;
  color: grey;
}
.positioning{
  padding-top: 20pt;
  padding-bottom: 20pt;
  text-align: center;
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
