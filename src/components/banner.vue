<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet">
    <b-jumbotron class="unselectable" id="toptag" >
      <template slot="header">
        <button id="fonti" class="link" v-on:click="toHome">Citypedia</button>
      </template>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'banner',
  methods: {
    toHome: function() {
      document.location.href="/";
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Raleway');


.link {
  background: none;
  border: none;
  outline: 0;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
#fonti{
  font-family: 'Montserrat';
  color: #393939;
}
#toptag {
  padding-top: 20px;
  text-align: left;
  margin-bottom: 0px;
  background-image: url("../assets/background.png");
  width: 100%;
  height: 280px;
}
</style>
