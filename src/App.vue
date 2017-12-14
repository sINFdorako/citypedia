<template>
  <div id="app">
    <banner/>
    <pagenavbar/>
    <router-view/>
  </div>
</template>

<script>
import pagenavbar from '@/components/pagenavbar'
import banner from '@/components/banner'
import addcity from '@/components/addcity/addcity'
import citydetails from '@/components/addcity/citydetails'
import ranking from '@/components/ranking/ranking'

export default {
  name: 'app',
  components: {pagenavbar, banner, addcity, citydetails, ranking}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  /* remove shitty outline shizzl */
  border: none;
  outline: 0;
}


@import url('https://fonts.googleapis.com/css?family=Nunito');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
</style>
