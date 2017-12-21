<template>
  <div class="spinner">
    <img src="../assets/loading.svg" alt="loading"/>
    <p>
      you are now logged in!
    </p>
  </div>
</template>

<script>
  export default {
    name: 'callback',
    props: ['auth'],
    data () {
      this.auth.handleAuthentication()
      return {}
    }
  }
</script>
