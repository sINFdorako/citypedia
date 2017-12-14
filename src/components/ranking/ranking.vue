<template>
 <div class="container">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="bold">Ranking</h2>
                <div class="form-group">
                  <select class="form-control" id="sel1">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option>Population</option>
                    <option>Size</option>
                    <option>Rating</option>
                    <option>ka</option>
                  </select>
                </div>
            </div>
          </div>
        </div>


</template>

<script>
export default {
  name: 'ranking',
  data: function() {
    return {
      ranking:[
        {name:'population'}
      ]
    };
  },
  methods:{
    aufklappen:function(){
    $('#sel1').css("display","block");
    }
  }
}

</script>

<style scoped>
.positioning{
  margin-top: 25pt;
  margin-bottom: 20pt;
}

 .input{
  padding: 8pt;
  text-align: center;
}

.button{
  margin-top: 20pt;
  margin-bottom: 0pt;
  width: 300pt;
  height:38px;

}

.scrollable-menu {
    height: auto;
    max-height: 200px;
    overflow-x: hidden;
}

h2{
  margin-top: 20px;
  margin-bottom: 20px;
}

.form-group{
width: 350px;
margin:0 auto;
}

select{
  text-align-last:  center;
  background-color: lightgrey;
  border-radius: 5px;
  box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.5);
}

option{
  background-color: lightgrey;
}
</style>
