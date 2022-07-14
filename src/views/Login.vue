<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <signin-form v-if="isSigningIn" @signupClicked="toggleForm"/>
      <signup-form v-else @signinClicked="toggleForm"/>
    </v-row>
  </v-container>
</template>

<script>
import SigninForm from '../components/SigninForm.vue'
import SignupForm from '../components/SignupForm.vue'
export default {
  components: { SigninForm, SignupForm },
  data: () => ({
    isSigningIn: true
  }),
  methods: {
    toggleForm: function() {
      this.isSigningIn = !this.isSigningIn;
    } 
  }
}
</script>

<style lang="sass">

</style>
