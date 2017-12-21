<template>
<div>
  <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
  <div class="foot">
    <div class="card text-center">
      <div class="card-header" style="background-color: #f7f6f5; font-family: 'Oswald', cursiv; font-size: 185%;">
    Citypedia 
    </div>
    <div class="card-body" style="background-color:#393939; color: white;">
    <h4 class="card-title">Get all important information about a city on point!</h4>
    <b-button v-on:click="toHome" class="btn btn-primary">Go up</b-button>
    </div>
  </div>
</div>
</div>

</template>


<script>
export default {
  name: 'ownfooter',
  methods: {
    toHome: function(event){
      if(event){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;      }
    }
  }
}
</script>

<style scoped>

.foot{
  margin-top: 480px;
}

</style>
