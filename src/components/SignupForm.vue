<template>
  <v-col cols="4">
    <h1 class="text-center">BucketList Logo</h1>
    <v-text-field placeholder="     Username">
      <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
    </v-text-field>
    <v-text-field placeholder="     Email">
      <v-icon slot="prepend" class="mr-4">far fa-envelope</v-icon>
    </v-text-field>
    <v-text-field placeholder="     Password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <div class="text-center mt-8">
      <v-btn outlined rounded>Sign Up</v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'SignupForm'

}
</script>

<style>

</style>