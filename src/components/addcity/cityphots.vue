<template>
  <div>

    <h1 style="text-align: center; margin-top: 30pt;">Add a picture of {{input}}</h1>

    <div class="positioning">
      <h3>Paste your link here</h3>
      <input id="linkbox" class="input" type="text" v-model="link"  placeholder="paste your link here"  value="localStorage.link">
    </div>

    <div class="positioning">
      <h3>Preview</h3>
      <img class="shadow" alt="previewinsertedimg" :src="link" style="width: 500px; height: 300px; margin-top: 30pt;" />
    </div>

    <!-- <div style="margin-top:100px;">


    <vue-clip :options="options" ref="vc" >
        <template slot="clip-uploader-action">
          <div class="uploader-action">
            <div class="dz-message">
              Drag and Drop files here or browse
              <div>
                <span class="widthspan">
                  <div class="item">
                    <img class="imagestyle" alt="file upload png">
                    <div class="item-overlay top"></div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </template>

        <template slot="clip-uploader-body" slot-scope="props">
          <div class="uploader-files">
            <div class="uploader-file" v-for="file in props.files">
              <div class="file-avatar" id="avatarsize">
                <img v-bind:src="file.dataUrl" alt="">
              </div>
              <div class="file-details" >
                <div id="colorsize"class="file-name">
                  {{ file.name }}
                </div>
                <div class="file-progress" v-if="file.status !== 'error' && file.status !== 'success'">
                  <span class="progress-indicator" v-bind:style="{width: file.progress + '%'}"></span>
                </div>

                <div class="file-meta" id="colorbg" v-else >
                  <span class="file-status">{{ file.status }}</span>
                  <b-button style="background-color: red !important;" v-on:click="removeFile(file)" class="button">delete</b-button>
                </div>
              </div>
            </div>
        </div>

        </template>

    </vue-clip>

    </div>

  -->


    <div class="positioning">
      <b-button class="button" v-on:click="back" > <i class="fa fa-caret-left" aria-hidden="true"/> back </b-button>
      <b-button class="button" v-on:click="checkinputs">Show Preview<i class="fa fa-check" aria-hidden="true"/></b-button>

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
       link: localStorage.link,

       /*options:{
         url: 'http://5d5b3ffd.ngrok.io/uploadHere'
       }*/
}
},



  methods: {

    checkinputs: function(event) {
      if(event){
        var inputField = document.getElementById("linkbox").value;

        if (this.$data.link == null || this.$data.link == "") {
          alert("Please add a link before you go on!")
    }else{
      this.$router.push({ path: 'checkinputs/' +this.$data.input})
      localStorage.setItem("link", this.$data.link)
  }
      }
    },

      back: function(event) {
        if(event){
          this.$router.go(-1)
        }
      },


}

}


</script>




<style scoped>

.positioning{
  padding-top: 20pt;
  padding-bottom: 20pt;
  text-align: center;
}

.input{
 padding: 8pt;
 text-align: center;
 height:50px;
 width: 350px;
 border:solid grey 2px;
 border-radius: 200px;

}

.shadow{
  box-shadow: 8px 8px 10px #aaa;
}


/*
#file{
  visibility: hidden;
  width: 1px;
}
.item {
  border: hidden;
  position: relative;
  margin: 10%;
  overflow: hidden;
}
.item img {
  max-width: 100%;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.item:hover img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.imagestyle{
  -webkit-mask-box-image: url("../../assets/_upload_image-512.png");
  background-color: #ffffff;
  display: block;
  width: 1%;
  margin: auto;
  padding: 5%;
}

.widthspan{
  font-size: 1%;
}

.positioning{
  margin-top: 50pt;
  text-align: center
}

.positioningbutton{
  margin-top: 50pt;
  text-align: center;
  margin-left: 25pt;
}


#cityphots {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.uploader *{
  box-sizing: border-box
}

.uploader-action{
  padding: 2px;
  width: 800px;
  height: 250px;
  margin: auto;
  background-color: #393939;
  border-radius: 8px;
  cursor: pointer;
}

.uploader-action{
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  border: 3px dashed #ffffff;
  border-radius: 8px;
}

.dz-message{
  margin-top: 3pt;
  font-size: 20px !important;
}

.uploader-file{
  width: 800px;
  height: 255px;
  background-color: lightgrey;
  text-align:center;
  border-radius: 8px;
  border-color: yellow;
  margin: auto;
}

.file-progress{
  padding: 2px;
  background-color: lightgreen;
}

.file-status{
  padding: 5px;
  color: green;
}

#colorsize{
  background-color:#393939;
  width: 250px;
  height: 60px;
}

.file-name{
  color: #ffffff;
  margin-top: 0;
  padding: 5px;
  margin: auto;
  margin-top: 2pt;
}

.file-avatar{
margin: auto;
margin-top: 12pt;
padding-top: 13pt;
}

#avatarsize{
  background-color: #393939;
  width: 250px;
  height: 150px;
}

.file-meta{
  margin: auto;
  margin-top: 2pt;
}

#colorbg{
  background-color: #393939;
  width: 250px;
  height: 40px;
} */
</style>
