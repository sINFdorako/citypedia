
<template>

  <div>
    <h1 style="text-align: center; margin-top: 50pt;">{{cityname}}</h1>

    <hr />

    <img :src="city[0].link" alt="image" />

    <h3>Population: {{city[0].population}}</h3>
  </div>

</template>

<script>

export default {
  name: 'cityprofile',
  created: function(){
    this.$http.get('http://localhost:3000/api/city/'+this.$route.params.cityname)
    .then(function(resp) {
      this.city = resp.body;
    })
    .catch(function(err) {
      this.cities = "Something went wrong: " +err
    })

},
  data:
  function(){
    return {
      cityname: this.$route.params.cityname,
      city: []
    };
  },
}

</script>

<style scoped>

</style>
