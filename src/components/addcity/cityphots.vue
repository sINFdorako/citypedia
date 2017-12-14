<template>
  <div>
    <div class="positioning">
      <b-button class="button" v-on:click="back" ><i class="fa fa-caret-left" aria-hidden="true"/> back </b-button>
      <b-button  class="button" v-on:click="finish" >finish <i class="fa fa-check" aria-hidden="true"></i>
</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cityphots',
  data: function(){
    return {
       input: this.$route.params.input,
       population: this.$route.params.population,
       area: this.$route.params.area,
       country: this.$route.params.country
    };
  },
  methods: {

      back: function(event) {
        if(event){
          this.$router.go(-1)
        }
      },

      finish: function(event){
        if(event){
          alert("are you sure you are finished?")
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

</style>
