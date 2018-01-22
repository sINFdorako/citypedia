<template>
  <div>

    <h1 style="text-align: center; margin-top: 30pt;">Add a picture of {{input}}</h1>

    <div class="positioning">
      <h3>Paste your link here</h3>
      <input id="linkbox" class="input" type="text" v-model="link"  placeholder="paste your link here"  value="localStorage.link">
    </div>

    <div class="positioning" v-if="this.link != null ">
      <h3>Preview</h3>
      <img class="shadow" alt="previewinsertedimg" :src="link" style="width: 500px; height: 300px; margin-top: 30pt;" />
    </div>

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

</style>
