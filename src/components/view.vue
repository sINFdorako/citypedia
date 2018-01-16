
<template>

  <div>
    <h1 style="text-align: center; margin-top: 50pt;">{{city.cityname}}</h1>

    <hr />

    <img :src="city.link" alt="image" />

    <h3>Population: {{city.population}}</h3>
  </div>

</template>

<script>

export default {
  name: 'view',
  created: function(){
    this.$http.get('http://localhost:3000/api/city')
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
       cities: []
    };
  },
}

</script>

<style scoped>

</style>
