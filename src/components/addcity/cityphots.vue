<template>
  <div>

    <h1 style="text-align: center; margin-top: 30pt;">Add some pictures of {{input}}</h1>
    <b-button class="button" v-on:click="stadtprofil">Stadtprofil</b-button>

    <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
  <h3>Drop files to upload</h3> <file-upload :drop="true"></file-upload>
</div>
<div class="upload" v-show="!isOption" >
  <div class="table-responsive" >
    <table class="table table-hover" style="margin-top: 200px;">
      <thead>
        <tr>
          <th>#</th>
          <th>Thumb</th>
          <th>Name</th>
          <th>Size</th>
          <th>Speed</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!files.length">
          <td colspan="7">
            <div class="text-center p-5">
              <label :for="name" class="btn btn-lg btn-primary">
                <span>
                  <div class="item">
                    <img class="imagestyle" alt="file upload png" width="65" height="60">
                    <div class="item-overlay top"></div>
                  </div>
                </span>
              </label>
            </div>
          </td>
        </tr>
        <tr v-for="(file, index) in files" :key="file.id">
          <td>{{index}}</td>
          <td>
            <img v-if="file.thumb" :src="file.thumb" width="40" height="auto" />
            <span v-else>No Image</span>
          </td>
          <td>
            <div class="filename">
              {{file.name}}
            </div>
            <div class="progress" v-if="file.active || file.progress !== '0.00'">
              <div :class="{'progress-bar': true, 'progress-bar-striped': true, 'bg-danger': file.error, 'progress-bar-animated': file.active}" role="progressbar" :style="{width: file.progress + '%'}">{{file.progress}}%</div>
            </div>
          </td>
          <td>{{file.size | formatSize}}</td>
          <td>{{file.speed | formatSize}}</td>

          <td v-if="file.error">{{file.error}}</td>
          <td v-else-if="file.success">success</td>
          <td v-else-if="file.active">active</td>
          <td v-else></td>
          <td>
            <div class="btn-group">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button">
                Action
              </button>
              <div class="dropdown-menu">
                <a :class="{'dropdown-item': true, disabled: file.active || file.success || file.error === 'compressing'}" href="#" @click.prevent="file.active || file.success || file.error === 'compressing' ? false :  onEditFileShow(file)">Edit</a>
                <a :class="{'dropdown-item': true, disabled: !file.active}" href="#" @click.prevent="file.active ? $refs.upload.update(file, {error: 'cancel'}) : false">Cancel</a>

                <a class="dropdown-item" href="#" v-if="file.active" @click.prevent="$refs.upload.update(file, {active: false})">Abort</a>
                <a class="dropdown-item" href="#" v-else-if="file.error && file.error !== 'compressing' && $refs.upload.features.html5" @click.prevent="$refs.upload.update(file, {active: true, error: '', progress: '0.00'})">Retry upload</a>
                <a :class="{'dropdown-item': true, disabled: file.success || file.error === 'compressing'}" href="#" v-else @click.prevent="file.success || file.error === 'compressing' ? false : $refs.upload.update(file, {active: true})">Upload</a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" @click.prevent="$refs.upload.remove(file)">Remove</a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="example-foorer">
    <div class="footer-status float-right">
      Drop: {{$refs.upload ? $refs.upload.drop : false}},
      Active: {{$refs.upload ? $refs.upload.active : false}},
      Uploaded: {{$refs.upload ? $refs.upload.uploaded : true}},
      Drop active: {{$refs.upload ? $refs.upload.dropActive : false}}
    </div>
    <hr />
    <div class="btn-group">
      <file-upload
        class="btn btn-primary dropdown-toggle"
        :post-action="postAction"
        :put-action="putAction"
        :extensions="extensions"
        :accept="accept"
        :multiple="multiple"
        :directory="directory"
        :size="size || 0"
        :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)"
        :headers="headers"
        :data="data"
        :drop="drop"
        :drop-directory="dropDirectory"
        :add-index="addIndex"
        v-model="files"
        @input-filter="inputFilter"
        @input-file="inputFile"
        ref="upload">
        <i class="fa fa-plus"></i>
        Select
      </file-upload>
      <div class="dropdown-menu">
        <label class="dropdown-item" :for="name">Add files</label>
        <a class="dropdown-item" href="#" @click="onAddFolader">Add folder</a>
      </div>
    </div>
    <hr>
    <button style="text-align: center !important;"type="button" class="btn btn-success" v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
      <i class="fa fa-arrow-up" aria-hidden="true"></i>
      Start Upload
    </button>
    <button type="button" class="btn btn-danger"  v-else @click.prevent="$refs.upload.active = false">
      <i class="fa fa-stop" aria-hidden="true"></i>
      Stop Upload
    </button>
  </div>
</div>



    <div class="positioningbutton">
      <b-button class="button" v-on:click="back" > back </b-button>
      <b-button  class="button" v-on:click="finish" >finish</b-button>
    </div>

  </div>

</template>


<script>

import Cropper from 'cropperjs'
import ImageCompressor from '@xkeshi/image-compressor'
import FileUpload from 'vue-upload-component'

export default {
  name: 'cityphots',
  components: {
    FileUpload,
  },
  data: function(){
    return {
       input: this.$route.params.input,
       population: this.$route.params.population,
       area: this.$route.params.area,
       country: this.$route.params.country,
       image: '',
       files: [],
       accept: 'image/png,image/gif,image/jpeg,image/webp',
       extensions: 'gif,jpg,jpeg,png,webp',
       // extensions: ['gif', 'jpg', 'jpeg','png', 'webp'],
       // extensions: /\.(gif|jpe?g|png|webp)$/i,
       minSize: 1024,
       size: 1024 * 1024 * 10,
       multiple: true,
       directory: false,
        drop: true,
        dropDirectory: true,
        addIndex: false,
        thread: 3,
        name: 'file',
        postAction: '/upload/post',
        putAction: '/upload/put',
        headers: {
        'X-Csrf-Token': 'xxxx',
        },
        data: {
        '_csrf_token': 'xxxxxx',
        },
        autoCompress: 1024 * 1024,
        uploadAuto: false,
        isOption: false,
        addData: {
        show: false,
        name: '',
        type: '',
        content: '',
        },
        editFile: {
        show: false,
        name: '',
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

      finish: function(event){
        if(event){
          alert("are you sure you are finished?")
        }
      },

    inputFilter(newFile, oldFile, prevent) {
    if (newFile && !oldFile) {
      $.ajax({
      url: "http://localhost:8000/#/",
      type: "POST",
      data: addData,
      processData: false,
      contentType: false,
      dataType: "jpeg",
    xhr: function(){
        var xhr = $.ajaxSettings.xhr() ;
        xhr.upload.onload = function(){ console.log('Upload done.') } ;
        return xhr ;
    },
    success: function(response) {
       console.log(response.status); // dafür muss man natürlich einen Status zurückgeben. Andernfalls tut man eben nichts.
    },
    error: function() { console.log("General error occured", "e"); },
    complete: function() { /* Fertig. */}
});

      // Before adding a file
      // 添加文件前
      // Filter system files or hide files
      // 过滤系统文件 和隐藏文件
      if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
        return prevent()
      }
      // Filter php html js file
      // 过滤 php html js 文件
      if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
        return prevent()
      }
      // Automatic compression
      // 自动压缩
      if (newFile.file && newFile.type.substr(0, 6) === 'image/' && this.autoCompress > 0 && this.autoCompress < newFile.size) {
        newFile.error = 'compressing'
        const imageCompressor = new ImageCompressor(null, {
          convertSize: Infinity,
          maxWidth: 512,
          maxHeight: 512,
        })
        imageCompressor.compress(newFile.file)
          .then((file) => {
            this.$refs.upload.update(newFile, { error: '', file, size: file.size, type: file.type })
          })
          .catch((err) => {
            this.$refs.upload.update(newFile, { error: err.message || 'compress' })
          })
      }
    }
    if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
      // Create a blob field
      // 创建 blob 字段
      newFile.blob = ''
      let URL = window.URL || window.webkitURL
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file)
      }
      // Thumbnails
      // 缩略图
      newFile.thumb = ''
      if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
        newFile.thumb = newFile.blob
      }
    }
  },
  // add, update, remove File Event
  inputFile(newFile, oldFile) {
    if (newFile && oldFile) {
      // update
      if (newFile.active && !oldFile.active) {
        // beforeSend
        // min size
        if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
          this.$refs.upload.update(newFile, { error: 'size' })
        }
      }
      if (newFile.progress !== oldFile.progress) {
        // progress
      }
      if (newFile.error && !oldFile.error) {
        // error
      }
      if (newFile.success && !oldFile.success) {
        // success
      }
    }
    if (!newFile && oldFile) {
      // remove
      if (oldFile.success && oldFile.response.id) {
        $.ajax({
          type: 'DELETE',
          url: 'http://localhost:8000/#/' +oldFile.response.id,
        })
        // $.ajax({
        //   type: 'DELETE',
        //   url: '/upload/delete?id=' + oldFile.response.id,
        // })
      }
    }
    // Automatically activate upload
    if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
      if (this.uploadAuto && !this.$refs.upload.active) {
        this.$refs.upload.active = true
      }
    }
  },
  alert(message) {
    alert(message)
  },
  onEditFileShow(file) {
    this.editFile = { ...file, show: true }
    this.$refs.upload.update(file, { error: 'edit' })
  },
  onEditorFile() {
    if (!this.$refs.upload.features.html5) {
      this.alert('Your browser does not support')
      this.editFile.show = false
      return
    }
    let data = {
      name: this.editFile.name,
    }
    if (this.editFile.cropper) {
      let binStr = atob(this.editFile.cropper.getCroppedCanvas().toDataURL(this.editFile.type).split(',')[1])
      let arr = new Uint8Array(binStr.length)
      for (let i = 0; i < binStr.length; i++) {
        arr[i] = binStr.charCodeAt(i)
      }
      data.file = new File([arr], data.name, { type: this.editFile.type })
      data.size = data.file.size
    }
    this.$refs.upload.update(this.editFile.id, data)
    this.editFile.error = ''
    this.editFile.show = false
  },
  // add folader
  onAddFolader() {
    if (!this.$refs.upload.features.directory) {
      this.alert('Your browser does not support')
      return
    }
    let input = this.$refs.upload.$el.querySelector('input')
    input.directory = true
    input.webkitdirectory = true
    this.directory = true
    input.onclick = null
    input.click()
    input.onclick = (e) => {
      this.directory = false
      input.directory = false
      input.webkitdirectory = false
    }
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
  border: none;
  position: relative;
  margin: 10%;
  padding: 50pt;
  overflow: hidden;
}
.item img {
  max-width: 500%;
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
  background-color: #393939;
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

.example-full .btn-group .dropdown-menu {
  display: block;
  visibility: hidden;
  transition: all .2s
}
.example-full .btn-group:hover > .dropdown-menu {
  visibility: visible;
}
.example-full label.dropdown-item {
  margin-bottom: 0;
}
.example-full .btn-group .dropdown-toggle {
  margin-right: .6rem
}
.example-full .filename {
  margin-bottom: .3rem
}
.example-full .btn-is-option {
  margin-top: 0.25rem;
}
.example-full .example-foorer {
  padding: .5rem 0;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
}
.example-full .edit-image img {
  max-width: 100%;
}
.example-full .edit-image-tool {
  margin-top: .6rem;
}
.example-full .edit-image-tool .btn-group{
  margin-right: .6rem;
}
.example-full .footer-status {
  padding-top: .4rem;
}
.example-full .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: .6;
  text-align: center;
  background: #000;
}
.example-full .drop-active h3 {
  margin: -.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}

.btn-primary{
  border: none !important;
  background-color: transparent !important;
}

</style>
