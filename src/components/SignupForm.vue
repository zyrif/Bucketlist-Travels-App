<template>
  <v-col cols="4">
    <site-logo logotype="hero"/>
    <v-text-field dark placeholder="     Username">
      <v-icon slot="prepend" class="mr-4">far fa-user</v-icon>
    </v-text-field>
    <v-text-field dark placeholder="     Email">
      <v-icon slot="prepend" class="mr-4">far fa-envelope</v-icon>
    </v-text-field>
    <v-text-field dark placeholder="     Password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <v-text-field dark placeholder="     Confirm Password">
      <v-icon slot="prepend" class="mr-4">fas fa-lock</v-icon>
    </v-text-field>
    <div class="text-center mt-8">
      <v-btn dark outlined rounded >Sign Up</v-btn>
    </div>
    <p class="text-center white--text mt-4">or</p>
    <div class="text-center">
      <v-btn rounded elevation="0" @click="signInHandler">Sign In</v-btn>
    </div>
  </v-col>
</template>

<script>
import SiteLogo from '../components/SiteLogo.vue'

export default {
  name: 'SignupForm',
  components: { SiteLogo },
  methods: {
    signInHandler: function () {
      this.$emit('signinClicked')
    }
  }
}
</script>

<style>

</style>