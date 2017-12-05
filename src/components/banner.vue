<template>
  <div>
    <b-jumbotron id="toptag">
      <template slot="header">
        Citypedia
      </template>
      <template slot="lead">
        behind the skyline
      </template>
    </b-jumbotron>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
#toptag {
  padding-top: 20px;
  text-align: left;
  margin-bottom: 0px;
  background-image: url("../assets/background.png");
  height: 280px;
}
</style>
