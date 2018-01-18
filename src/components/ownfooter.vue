<template>
<div>
  <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
  <div class="foot">
    <div class="card text-center">
      <div class="card-header">
    Citypedia   <i id="uptotop" v-on:click="toHome" class="fa fa-chevron-up" aria-hidden="true"></i>
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

.card {
  background-color: #393939;
}

.card-header{
  color: grey;
  font-family: 'Oswald', cursiv;
  font-size: 185%;
}

#uptotop {
  float:right;
  height: 3px;
  width: auto;
}

</style>
