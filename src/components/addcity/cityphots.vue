<template>
  <div>

    <h1 style="text-align: center; margin-top: 30pt;">Add some pictures of {{input}}</h1>


    <div class="positioning">
      <form>
        <label for="file" class="input-label">
          <span>
            <div class="item">
              <img class="imagestyle" alt="file upload png" width="65" height="60">
              <div class="item-overlay top"></div>
            </div>
          </span>
        </label>
        <input type="file" multiple="true" id="file" v-on:change="file"/>
      </form>
    </div>

    <div class="positioningbutton">
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
       file: null
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

</style>
