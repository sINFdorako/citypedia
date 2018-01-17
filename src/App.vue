<template>
  <div id="app">
    <banner/>
    <pagenavbar/>
    <router-view class="router-view"/>
    <ownfooter/>
  </div>
</template>

<script>
import pagenavbar from '@/components/pagenavbar'
import banner from '@/components/banner'
import addcity from '@/components/addcity/addcity'
import citydetails from '@/components/addcity/citydetails'

import ranking from '@/components/ranking/ranking'

import cityphots from '@/components/addcity/cityphots'
import checkinputs from '@/components/addcity/checkinputs'

import ownfooter from '@/components/ownfooter'
import citycard from '@/components/citycard'
import cityprofile from '@/components/cityprofile'


export default {
  name: 'app',
  components: {pagenavbar, banner, addcity, citydetails, cityphots, ranking, ownfooter, checkinputs, citycard, cityprofile}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* remove shitty outline shizzl */
  border: none;
  outline: 0;
}

.router-view{
  min-height: 750px;
}

@import url('https://fonts.googleapis.com/css?family=Nunito');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
</style>
