<template>
<div>
  <div class="positioning">

    <div class="card" style="width: 20rem;">
      <img class="card-img-top" src="https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg" alt="Card image cap">
      <div class="card-block">
        <h4 id="heading1" class="card-title">New York</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'cityprofile',
  created: function(){
    this.$http.get('http://localhost:3000/api/cities')
    .then(function(resp) {

      this.cities = resp.body;
      console.log(resp.body);
    })
    .catch(function(err) {

      this.countries = "Something went wrong: " +err
    })

    $(document).ready(function() {

    $(".card-title").text('hallos');
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
    padding-top: 20pt;
    padding-bottom: 20pt;
    text-align: center;
    display: block;
    margin-left: 475pt;
}

</style>
