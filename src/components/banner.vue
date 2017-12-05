<template>
  <div>
    <b-jumbotron class="unselectable" id="toptag" >
      <template slot="header">
        <button class="link" v-on:click="toHome">Citypedia</button>
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

#toptag {
  padding-top: 20px;
  text-align: left;
  margin-bottom: 0px;
  background-image: url("../assets/background.png");
  height: 280px;
  font-family: 'Montserrat', sans-serif;
}
</style>
