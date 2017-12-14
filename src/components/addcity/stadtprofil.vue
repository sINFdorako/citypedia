<template>
  <div style="margin-top:50px;">


  <vue-clip :options="options">
      <template slot="clip-uploader-action">
        <div class="uploader-action">
          <div class="dz-message">
            Drag and Drop files here or browse
          </div>
        </div>
      </template>

      <template slot="clip-uploader-body" slot-scope="props">
        <div class="uploader-files">
          <div class="uploader-file" v-for="file in props.files">
            <div class="file-avatar">
              <img v-bind:src="file.dataUrl" alt="">
            </div>
            <div class="file-details">
              <div class="file-name">
                {{ file.name }}
              </div>

              <div class="file-progress" v-if="file.status !== 'error' && file.status !== 'success'">
                <span class="progress-indicator" v-bind:style="{width: file.progress + '%'}"></span>
              </div>


              <div class="file-meta" v-else>
                <span class="file-size">{{ file.size }}</span>
                <span class="file-status">{{ file.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>

  </vue-clip>

  </div>

</template>

<script>

export default {
  name: 'stadtprofil',

  data: function(){
    return{
      options:{
        url: 'http://127.0.0.1:1337/uploadHere'
      }
    }
  }
}

</script>

<style>
#stadtprofil {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.uploader *{
  box-sizing: border-box
}

.uploader-action{
  padding: 20px;
  background: #393939;
  cursor: pointer;
  opacity: 0,2;
}

.uploader-action .dz-message{
  color: #94a7c2;
  text-align: center;
  padding: 20px 40px;
  border: 3px dashed #dfe8fe;
  border-radius: 4px;
  font-size: 16px;
}

.uploader-files{
  flex: 1;
  padding: 40px;
}

.file-progress{
  padding: 10px;
  color: green;
  background-color: #393939;
}

.file-size{
  padding: 10px;
  color: green;
  background-color: #393939;
}

.file-status{
  padding: 10px;
  color: yellow;
  background-color: #393939;
}
</style>
