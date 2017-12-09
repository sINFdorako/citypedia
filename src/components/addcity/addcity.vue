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
    //Put localstorage cityname to input
    $(document).ready(function(){
      $('#inputField').val(localStorage.cityname);
    });
},
  mounted: function(){
      //Capitalize first letter of input
          $(document).ready(function() {
            $('input').on('keydown', function(event) {
              if (this.selectionStart == 0 && event.keyCode >= 65 && event.keyCode <= 90 && !(event.shiftKey) && !(event.ctrlKey) && !(event.metaKey) && !(event.altKey)) {
                 var $t = $(this);
                 event.preventDefault();
                 var char = String.fromCharCode(event.keyCode);
                 $t.val(char + $t.val().slice(this.selectionEnd));
                 this.setSelectionRange(1,1);
              }
          });
      });
  },

  methods: {

      checkinputcity: function (event){
        if(event){
            var inputField = document.getElementById("inputField").value;

            if (this.$data.input == null || this.$data.input == "") {
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

.button{
  margin-top: 30pt;
}

</style>
