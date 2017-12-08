<template>
  <div>

    <h1 class="positioning"> More details about {{input}} </h1>
    <div class="positioning">
      <h3>Country</h3>
      <input id="myTextBox" class="input" type="text" v-model="country" placeholder="Country">
    </div>

    <div class="positioning">
      <h3>Population</h3>
      <input id="myTextBox" class="input" type="text" v-model="population" placeholder="Population">
    </div>

    <div class="positioning">
      <h3>Area in km²</h3>

      <input id="myTextBox" class="input" type="text" v-model="area" placeholder="Area in km²">

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
       input: this.$route.params.input
    };
  },

   methods: {

       back: function(event) {
         if(event){
           this.$router.go(-1)
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
