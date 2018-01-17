
<template>

  <div>
    <h1 style="text-align: center; margin-top: 50pt;"></h1>

    <hr />

    <img  alt="image" />

    <h3>Population: </h3>
  </div>

</template>

<script>

export default {
  name: 'cityprofile',
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
