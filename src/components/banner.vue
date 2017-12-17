<template>
  <div>
    <h1 style="color:black; background-color:transparent;">Citypedia</h1>
      <div>
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  background="#ababab"
                  :interval="4000"
                  img-width="1500"
                  img-height="480"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!-- Text slides with image -->
        <b-carousel-slide class="imgsz" style="opacity: 0.7"
                          img-src="http://www.panorama-cities.net/cologne/panoramas/koeln_panorama_3.jpg"> <span><button style="width:100%; height:280px;"class="link" v-on:click="toHome"></button></span>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide class="imgsz" style="opacity: 0.7" img-src="http://patricksmithphotography.com/blog/wp-content/uploads/2015/05/pano_city_lights_san_francisco_4000.jpg"> <span><button style="width:100%; height:280px;"class="link" v-on:click="toHome"></button></span>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide class="imgsz" style="opacity: 0.7" img-src="https://upload.wikimedia.org/wikipedia/commons/2/23/Tokyo_Minato_Panorama.jpg"> <span><button style="width:100%; height:280px;"class="link" v-on:click="toHome"></button></span>
        </b-carousel-slide>

      </b-carousel>
      </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    toHome: function() {
      document.location.href="/";
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
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

.imgsz{
  margin-top: 0 !important;
  margin-left: 0 !important;
  width: 100% !important;
  height: 280px !important;
}

#toptag {
  padding-top: 20px;
  text-align: left;
  margin-bottom: 0px;
  background-size: 500px 285px;
  width: 100%;
  height: 280px;
  font-family: 'Montserrat', sans-serif;
}
</style>
