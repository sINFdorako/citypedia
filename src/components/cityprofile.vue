
<template>

  <div>
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">

    <h1>{{cityname}} <img style="height: 30px;" :src="countrydata[0].flag" alt="flag"/> </h1>


    <hr />
    <div class="firstdiv" >
      <img id="firstimage" :src="city[0].link" alt="cityimg"/>
    </div>

    <div class="seconddiv">

    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
    <div style="margin-top:20pt;">
    <div class="positioning, second" >
      <table>
      <tbody>
        <tr>
          <td>Country: {{city[0].country}}</td>
          <td v-if="city[0].avgtemp != 'undefined'">Average Temperature: {{city[0].avgtemp}}°C</td>
        </tr>
        <tr>
          <td>Population: {{city[0].population}}</td>
          <td v-if="city[0].nou != 'undefined'">Number of Universities: {{city[0].nou}}</td>
        </tr>
         <tr>
          <td>Area: {{city[0].area}}</td>
          <td v-if="city[0].urate != 'undefined'">Unemployment rate: {{city[0].urate}}%</td>
        </tr>
         <tr>
          <td v-if="city[0].hasLakes != 'undefined'">Has Lakes:
            <i class="fa fa-check" aria-hidden="true"/></td>
          <td v-if="city[0].hasTrainstation != 'undefined'">Has Trainstation:
            <i class="fa fa-check" aria-hidden="true"/></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</div>

</div>

</template>

<script>

export default {
  name: 'cityprofile',
  created: function(){
    this.$http.get('http://localhost:3000/api/city/'+this.$route.params.cityname)
    .then(function(resp) {
      this.city = resp.body;
      this.countryname =  this.city[0].country;
      console.log(this.countryname);
      this.$http.get('https://restcountries.eu/rest/v2/name/'+this.countryname+'?fullText=true')
      .then(function(resp) {
        console.log(resp.body);
        console.log("req2");
        this.countrydata = resp.body;
      })
      .catch(function(err) {
        this.countrydata = "Something went wrong" +err
      })

    })
    .catch(function(err) {
      this.cities = "Something went wrong: " +err
    })


},
  data:
  function(){
    return {
      cityname: this.$route.params.cityname,
      city: [{}],
      countrydata: [{}],
      countryname: ""
    };
  },
}

</script>

<style scoped>

h1{
  text-align: center;
  margin-top: 50pt;
  font-family: 'Lobster', cursive;
}

.positioning{
  padding-top: 30pt;
  padding-bottom: 20pt;
  text-align: center;
}

#firstimage {
   width: 350px;
   box-shadow: 8px 8px 10px #aaa;
}

.firstdiv{
  margin-top: 25pt;
  float: left;
  margin-left: 6em;

}

.seconddiv{
  float: right;
  margin-right: 6em;
}

strong {
	font-weight: bold;
}

em {
	font-style: italic;
}

table {
  font-family: "Oswald" ,cursive;
	background: #f5f5f5;
	border-collapse: separate;
	box-shadow: inset 0 1px 0 #fff;
	font-size: 30px;
	line-height: 2em;
	margin: 50px auto;
	text-align: left;
	width: 800px;
}

th {
	background: url(https://jackrugile.com/images/misc/noise-diagonal.png), linear-gradient(#777, #444);
	border-left: 1px solid #555;
	border-right: 1px solid #777;
	border-top: 1px solid #555;
	border-bottom: 1px solid #333;
	box-shadow: inset 0 1px 0 #999;
	color: #fff;
  font-weight: bold;
	padding: 10px 15px;
	position: relative;
	text-shadow: 0 1px 0 #000;
}

th:after {
	background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));
	content: '';
	display: block;
	height: 25%;
	left: 0;
	margin: 1px 0 0 0;
	position: absolute;
	top: 25%;
	width: 100%;
}

th:first-child {
	border-left: 1px solid #777;
	box-shadow: inset 1px 1px 0 #999;
}

th:last-child {
	box-shadow: inset -1px 1px 0 #999;
}

td {
	border-right: 1px solid #fff;
	border-left: 1px solid #e8e8e8;
	border-top: 1px solid #fff;
	border-bottom: 1px solid #e8e8e8;
	padding: 10px 15px;
	position: relative;
	transition: all 300ms;
}

td:first-child {
	box-shadow: inset 1px 0 0 #fff;
}

td:last-child {
	border-right: 1px solid #e8e8e8;
	box-shadow: inset -1px 0 0 #fff;
}

tr {
	background: url(https://jackrugile.com/images/misc/noise-diagonal.png);
}

tr:nth-child(odd) td {
	background: #f1f1f1 url(https://jackrugile.com/images/misc/noise-diagonal.png);
}

tr:last-of-type td {
	box-shadow: inset 0 -1px 0 #fff;
}

tr:last-of-type td:first-child {
	box-shadow: inset 1px -1px 0 #fff;
}

tr:last-of-type td:last-child {
	box-shadow: inset -1px -1px 0 #fff;
}

tbody:hover td {
	color: transparent;
	text-shadow: 0 0 3px #aaa;
}

tbody:hover tr:hover td {
	color: #444;
	text-shadow: 0 1px 0 #fff;
}


</style>
