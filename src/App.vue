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
import cityphots from '@/components/addcity/cityphots'
import stadtprofil from '@/components/addcity/stadtprofil'


export default {
  name: 'app',
  components: {pagenavbar, banner, addcity, citydetails, cityphots, stadtprofil}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* remove shitty outline shizzl */
  border: none;
  outline: 0;
}


@import url('https://fonts.googleapis.com/css?family=Nunito');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
</style>
