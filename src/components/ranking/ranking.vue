<template>
  <div>

  <h1 style="text-align: center; margin-top: 20pt;"> Sort after</h1>


  <div class="positioning">
    <select id="dropdownlist" class="input" v-on:change="">
      <option selected disabled value="">Choose sorting</option>
      <option id="options">PLACEHOLDER</option>
      <option id="options">PLACEHOLDER</option>
      <option id="options">PLACEHOLDER</option>
      <option id="options">PLACEHOLDER</option>
      <option id="options">PLACEHOLDER</option>
    </select>

  </div>

</div>
</template>

<script>
export default {
  name: 'ranking',
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


select, option {
  text-align: center;
}

h2{
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>
