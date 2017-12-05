<template>
  <div>
    <b-jumbotron class="unselectable" id="toptag" >
      <template slot="header">
        Citypedia
      </template>
    </b-jumbotron>
  </div>
</template>

<script>
</script>

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
