<template>
  <div>

    <h1 style="text-align: center; margin-top: 30pt;">Add some pictures of {{input}}</h1>

    <div class="positioning">
      <img src="../../assets/fileuploader-dragdrop-icon.png"/>
    </div>

    <!--<div class="center">
    <vue-core-image-upload
    class="btn btn-primary"
    :crop="false"
    @imageuploaded="imageuploaded"
    :data="data"
    :max-file-size="5242880"
    url="http://101.198.151.190/api/upload.php" >
    </vue-core-image-upload>
</div>-->

    <div class="positioning">
      <b-button class="button" v-on:click="back" > back </b-button>
      <b-button  class="button" v-on:click="finish" >finish</b-button>
    </div>

  </div>

</template>


<script>
export default {
  name: 'cityphots',
  data: function(){
    return {
       input: this.$route.params.input,
       population: this.$route.params.population,
       area: this.$route.params.area,
       country: this.$route.params.country,
       image: '',
        src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
    };
  },
  methods: {

      back: function(event) {
        if(event){
          this.$router.go(-1)
        }
      },

      finish: function(event){
        if(event){
          alert("are you sure you are finished?")
        }
      }
    },

    imageuploaded(res) {
      if (res.errcode == 0) {
        this.src = res.data.src;
      }
    },

  /*components: {
     'vue-core-image-upload': VueCoreImageUpload,
   },*/
  }

</script>

<style scoped>

body {
				font-family: 'Roboto', sans-serif;
				font-size: 14px;
                line-height: normal;
				color: #47525d;
				background-color: #fff;

				margin: 0;
				padding: 20px;

				width: 560px;
			}

.positioning{
  margin-top: 100pt;
  text-align: center
}

</style>
