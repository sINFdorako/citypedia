<template>
  <div>
    <div class="positioning">
      <h1>Which city do you want to add?</h1>
      <br>
      <input id="myTextBox" class="input" type="text" v-model="city" placeholder="city">
      <br>
      <div>
        <b-button :to="{ path: 'details/'+city }" class="button">go on</b-button>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  name: 'addcity',
  data: function(){
    return {
      city:'',
    };
  }
}

$("#myTextBox").focus();

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
