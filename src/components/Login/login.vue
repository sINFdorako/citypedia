
<template>
  <div class="login">
    <g-signin-button
      :params="{client_id: '340370812528-fqkdef2ah126p3i1opeuqslgtv9vnu61.apps.googleusercontent.com'}"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Google
    </g-signin-button>
  </div>
</template>



<script>
export default {

  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      console.log("YAY")
      console.log(googleUser)
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
