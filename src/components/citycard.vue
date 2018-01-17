<template>
<div>
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
<div class="positioning media">
    <div class="card" id="icon" v-for="city in cities" style="width: 20rem;">
      <img class="card-img-top" :src="city.link" alt="Card image cap"/>
      <div class="card-block">
        <b-button :to="{ path: '/cityprofile/'+city.cityname }" class="btn btn-primary" style="margin-top:10pt; margin-bottom: 10pt;">
          <h4 style="font-family: 'Lobster', cursive;" id="heading1" class="card-title">{{city.cityname}}</h4>
        </b-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'citycard',
  created: function(){
    this.$http.get('http://localhost:3000/api/cities')
    .then(function(resp) {
      this.cities = resp.body;
    })
    .catch(function(err) {
      this.cities = "Something went wrong: " +err
    })

},
  data:
  function(){
    return {
      cities: []
    };
  },
}

</script>

<style scoped>

.positioning{
    padding-left: 20px;
    padding-top: 20pt;
    padding-bottom: 20pt;
    text-align: center;
    display: block;
    margin-left: 550pt;
}

.card{
  background-color: lightgrey !important;
  margin-top: 30pt;
  margin-right: 10pt;
}

.media {
  float: left;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  margin-left: 200px;
  margin-right: 200px;
}

#icon{
    display:inline-block;
    width: 64px;
    height: 64px;
}



</style>
