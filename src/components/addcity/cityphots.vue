<template>
  <div>

    <h1 style="text-align: center; margin-top: 30pt;">Add some pictures of {{input}}</h1>



    <div style="margin-top:100px;">


    <vue-clip :options="options" ref="vc" >
        <template slot="clip-uploader-action">
          <div class="uploader-action">
            <div class="dz-message">
              Drag and Drop files here or browse
              <div style="margin-left: 370pt;">
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
            <div class="uploader-file" v-for="file in props.files" style="background-color: lightgray; margin-left: 42pt; margin-right: 40pt;">
              <div class="file-avatar" style="padding-top: 20px; margin-right:750pt; margin-left: 43pt; padding: 1px; margin-top:0; background-color:#393939;">
                <img v-bind:src="file.dataUrl" alt="">
              </div>
              <div class="file-details" >
                <div class="file-name" style="margin-right: 750pt; margin-left: 43pt; padding: 15px; margin-top:0; background-color:#393939; color: #ffffff" >
                  {{ file.name }}
                </div>
                <div class="file-progress" v-if="file.status !== 'error' && file.status !== 'success'">
                  <span class="progress-indicator" v-bind:style="{width: file.progress + '%'}"></span>
                </div>


                <div class="file-meta" v-else style="margin-top: -38pt;">
                  <span class="file-size" style=" background-color:#393939; color: #ffffff">datasize: {{ file.size }}</span>
                  <span class="file-status"style=" background-color:#393939;">{{ file.status }}</span>
                  <button v-on:click="removeFile(file)" style=" background-color:#393939; color:red; padding: 4px;" class="button">delete</button>
                </div>
                <hr />
              </div>
            </div>
          </div>

        </template>

    </vue-clip>

    </div>


    <div class="positioningbutton">
      <b-button class="button" v-on:click="back" > <i class="fa fa-caret-left" aria-hidden="true"/> back </b-button>
      <b-button class="button" v-on:click="stadtprofil">Show Preview<i class="fa fa-check" aria-hidden="true"></b-button>

    </div>

  </div>

</template>


<script>

import Cropper from 'cropperjs'
import ImageCompressor from '@xkeshi/image-compressor'
import FileUpload from 'vue-upload-component'

export default {
  name: 'cityphots',

  data: function(){
    return {
       input: this.$route.params.input,
       population: this.$route.params.population,
       area: this.$route.params.area,
       country: this.$route.params.country,
       options:{
         url: 'http://7eda40f7.ngrok.io/uploadHere'
       }
}
},


  methods: {

    stadtprofil: function(event) {
      if(event){
        this.$router.push({ path: 'stadtprofil/' +this.$data.input})
      }
    },

      back: function(event) {
        if(event){
          this.$router.go(-1)
        }
      },

    removeFile(file){
        this.$refs.vc.removeFile(file)
    }
  }
}




</script>




<style scoped>

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
  -webkit-mask-box-image: url("../../assets/fileuploader-dragdrop-icon.png");
  background-color: #ffffff;
  display: block;
  width: 1%;
  margin: 2%;
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
  width: 1250px;
  margin-left: 73pt;
  background-color: #393939;
  cursor: pointer;
}

.uploader-action .dz-message{
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  padding: 10px 30px;
  border: 2px dashed #ffffff;
  border-radius: 4px;
  font-size: 16px;
}

.uploader-files{
  flex: 1;
  padding: 40px;
}

.file-progress{
  padding: 2px;
  background-color: lightgreen;
}

.file-size{
  padding: 5px;
  color: white;
  background-color: #393939;
}

.file-status{
  width: 1250px;
  padding: 5px;
  color: green;
  background-color: #393939;
}
</style>
