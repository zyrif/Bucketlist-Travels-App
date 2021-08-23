<template>
  <v-col cols="4">
    <h1 class="text-center">BucketList Logo</h1>
    <v-text-field placeholder="     Username">
      <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
    </v-text-field>
    <v-text-field placeholder="     Password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <div class="d-flex flex-row-reverse mb-4 text-caption">Forgot Password?</div>
    <div class="text-center">
      <v-btn outlined rounded>Sign in</v-btn>
    </div>
    <p class="text-center mt-4">or</p>
    <div class="text-center">
      <v-btn dark rounded @click="SignupHandler">Sign up</v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'SigninForm',
  methods: {
    SignupHandler: function() {
      this.$emit('signupClicked');
    }
  }

}
</script>

<style>

</style>