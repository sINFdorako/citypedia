<template>
  <div>
    <div class="positioning">
      <h1>Which city do you want to add?</h1>
      <br>
      <input id="inputField" class="input" type="text" v-model="input" placeholder="city" value="localStorage.cityname">
      <br>
      <div>
        <b-button class="button" v-on:click="checkinputcity">go on</b-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'addcity',

  data: function(){
    return {
      input: localStorage.cityname,
    };
  },
  created: function(){
    $(document).ready(function() {
      $('#inputField').val(localStorage.cityname);
    });
  },

  methods: {

      checkinputcity: function (event){
        if(event){
            var inputField = document.getElementById("inputField").value;
            if (this.$data.input == null) {
              alert("Please tell us the name of your city before you go on")
        }else{
          this.$router.push({ path: 'citydetails/' +this.$data.input})
          localStorage.setItem("cityname", this.$data.input)
      }
    }
  }
}
}



//:to="{ path: 'citydetails/'+city }"

//}else{
  //router.push({ path: 'citydetails/' +city })
//}


</script>

<style scoped>
.positioning{
  margin-top: 25pt;
}


 .input{
  padding: 8pt;
  text-align: center;
}

.button{
  margin-top: 30pt;
}

</style>
