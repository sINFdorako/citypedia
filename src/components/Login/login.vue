<template>

      <title>Google SignIn</title>
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <meta name="google-signin-client_id" content=" 340370812528-fqkdef2ah126p3i1opeuqslgtv9vnu61.apps.googleusercontent.com ">
      <script src="https://apis.google.com/js/platform.js" async defer>
      </script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
      </script>
      <script src="script.js"></script>
</template>

<script>
  <div class="g-signin2" data-onsuccess="onSignIn"</div>
    <div class="data">
        <img id="pic" class="img-circle" width="100" height="100"/>
        <p id="email" class="alert alert-danger">
        <button onclick="signOut()" class="btn btn-danger">SignOut</button>

    </div>
</script>


<style>

  .g-signin2{
    margin-left:500px;
    margin-top:200px;
  }

  .data{
    display:none;
  }

</style>
