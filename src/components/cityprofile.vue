<template>
<div>
  <div class="positioning">

        <b-card v-model="cityname, link"
              title="New York"
              img-src="https://www.urlaubsguru.de/wp-content/uploads/2016/03/time-square-new-york-city-istock-487537456-2.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">View</b-button>
        </b-card>

  </div>
</div>
</template>

<script>

export default {
  name: 'cityprofile',

}

</script>

<style scoped>

.positioning{
    padding-top: 20pt;
    padding-bottom: 20pt;
    text-align: center;
    display: block;
    margin-left: 475pt;
}

</style>
