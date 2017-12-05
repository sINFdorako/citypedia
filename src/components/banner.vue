<template>
  <div>
    <b-jumbotron class="unselectable" id="toptag">
      <template slot="header">
        Citypedia
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
  /* The image used */
  background-image: url("../assets/background.png");
/* Set a specific height */
  height: 280px;

  /* Create the parallax scrolling effect */
/*  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
*/}


</style>
